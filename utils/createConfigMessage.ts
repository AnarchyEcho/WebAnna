export const createConfigMessage = async (hookUrl: string) => {
  const chosenGuild = useState<any>('chosenGuild');

  await fetch(`${hookUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: null,
      avatar_url: null,
      content: `${chosenGuild.value.name.replaceAll(' ', '_')}_config_file`,
    }),
  }).then(x => x.json());
};
