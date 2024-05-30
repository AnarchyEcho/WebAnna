export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // change api endpoint to include the webhook url in the request as a parameter.
  await fetch('https://discord.com/api/webhooks/1232738440949268501/nWYyCWB-nf_f6GeA9rlFOXRT54t2wsu7Q57TUXuA5_RnCHH7ga1i2h7vxdUOZX6_nLX5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar_url: '',
      username: '',
      content: body,
    }),
  }).then(x => x.json()).then(console.log);
  return body;
});
