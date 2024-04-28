declare module '#auth-utils' {
  interface User extends User {
    discordId: string,
    tokens: {
      token_type: string,
      access_token: string,
      expires_in: number,
      refresh_token: string,
      scope: string,
    },
  }
}

export { }