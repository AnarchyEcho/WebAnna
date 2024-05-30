export default defineEventHandler(async (event) => {
  const hookUrl = getQuery(event).hookUrl as string;
  const body = JSON.stringify(JSON.parse(JSON.stringify(await readBody(event).then(x => x.data).catch())));

  if (hookUrl) {
    await fetch(hookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // avatar_url: '',
        username: 'Patreon Hook',
        content: body,
      }),
    }).then(x => x.json()).catch().then(console.log);
  }
  return body;
});
