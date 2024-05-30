export interface IGuild {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean,
  permissions: number,
  permissions_new: string,
  features: string[]
}

export interface IConfig {
  botPrefix: string,
  botChannels: string[],
  moderatorRoles: string[],
  whitelistRoles: string[],
  customWelcome: boolean,
  embedColour: string,
  memberCount: boolean,
  memberCountVcId: string
  workTimer: number,
  workQuotes: string[],
  currency: string,
  sellRate: number,
  roleChannel: string,
  nsfwRoleChannels: string[],
  customMute: boolean,
  muteRole: string,
  punishRules: {
    punishments: {
      amount: number,
      punishment: 'mute_short' | 'mute_long' | 'kick' | 'ban',
    }[],
    punishLength: {
      mute_short: number,
      mute_long: number,
      kick: boolean,
      ban: boolean,
    }
  },
  xpImageFields: {
    colour: string,
    profilePic: {
      size: number,
      x: number,
      y: number,
    },
    fields: [
      {
        name: string,
        fontSize: number,
        x: number,
        y: number
      }
    ]
  },
  useVerify: boolean,
  verifyChannel: string,
  pendingVerificationChannel: string,
  verificationLogChannel: string,
  verifiedWelcomeChannel: string,
  nsfwVerifiedWelcomeChannel: string,
  welcomeRole: string,
  verifiedWelcomeChannelMessage: string,
  verifyQuestions: {
    question: string,
    style: number,
    required: boolean,
  }[],
  verifyEmojis: string[],
  verifyAcceptRoles: string[],
  verifyNsfwAcceptRoles: string[],
}
