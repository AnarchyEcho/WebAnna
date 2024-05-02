import type { IGuild } from '~/interfaces';

export const createConfigMessage = async (hookUrl: string) => {
  const chosenGuild = useState<IGuild>('chosenGuild');

  await fetch(`${hookUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: null,
      avatar_url: null,
      content: `${chosenGuild.value.name.replaceAll(' ', '_')}_config_file ${chosenGuild.value.id}`,
    }),
  });
};
