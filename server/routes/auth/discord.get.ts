export default oauth.discordEventHandler({
  config: {
    profileRequired: true,
    scope: ['guilds'],
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        discordId: user.id,
        tokens,
      },
    });
    return sendRedirect(event, '/');
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('Discord OAuth error:', error);
    return sendRedirect(event, '/');
  },
});
