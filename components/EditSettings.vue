<script lang="ts" setup>
import type { IConfig } from '~/interfaces';

const config = useState<IConfig>('fullConfig');
</script>

<template>
  <div v-if="config" class="form">
    <div class="formItem">
      <h4>
        Bot prefix:
      </h4>
      <input v-model="config['botPrefix']" style="font-weight: bold;" type="text">
    </div>

    <div class="formItem">
      <h4>
        Bot Channels:
      </h4>
      <div v-for="_, i in config['botChannels']" :key="i" class="multiItem">
        <input v-model="config.botChannels[i]" type="number">
        <div style="cursor: pointer;" @click="config['botChannels'].splice(i, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['botChannels'].push('')">
        [Add another channel]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Moderator Roles:
      </h4>
      <div v-for="_, i in config['moderatorRoles']" :key="i" class="multiItem">
        <input v-model="config.moderatorRoles[i]" type="text">
        <div style="cursor: pointer;" @click="config['moderatorRoles'].splice(i, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['moderatorRoles'].push('')">
        [Add another channel]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Whitelist Roles:
      </h4>
      <div v-for="_, i in config['whitelistRoles']" :key="i" class="multiItem">
        <input v-model="config.whitelistRoles[i]" type="text">
        <div style="cursor: pointer;" @click="config['whitelistRoles'].splice(i, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['whitelistRoles'].push('')">
        [Add another channel]
      </div>
    </div>

    <div class="formItem toggle">
      <h4>
        Custom Welcome:
      </h4>
      <input v-model="config['customWelcome']" type="checkbox">
    </div>

    <div class="formItem">
      <h4>
        Embed Colour:
      </h4>
      <input v-model="config['embedColour']" type="text">
    </div>

    <div class="formItem toggle">
      <h4>
        Member Count:
      </h4>
      <input v-model="config['memberCount']" type="checkbox">
    </div>

    <div class="formItem">
      <h4>
        Member Count Voice Channel ID:
      </h4>
      <input v-model="config['memberCountVcId']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Work Timer:
      </h4>
      <input v-model="config['workTimer']" type="number">
    </div>

    <div class="formItem">
      <h4>
        Currency:
      </h4>
      <input v-model="config['currency']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Sell Rate:
      </h4>
      <input v-model="config['sellRate']" type="number">
    </div>

    <div class="formItem toggle">
      <h4>
        Custom Mute:
      </h4>
      <input v-model="config['customMute']" type="checkbox">
    </div>

    <div class="formItem">
      <h4>
        Mute Role:
      </h4>
      <input v-model="config['muteRole']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Punish Rules:
      </h4>
      <div v-for="_, i in config['punishRules'].punishments" :key="i" class="multiItem">
        <input v-model="config.punishRules.punishments[i].amount" type="number">
        <select v-model="config.punishRules.punishments[i].punishment">
          <option v-for="__, key in config['punishRules'].punishLength" :key="key">
            {{ key }}
          </option>
        </select>
        <div style="cursor: pointer;" @click="config['punishRules'].punishments.splice(i, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['punishRules'].punishments.push({amount: 0, punishment: 'mute_short'})">
        [Add another punishment]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Punish Rules Lengths:
      </h4>
      <div v-for="_, key in config['punishRules'].punishLength" :key="key" class="multiItem">
        <div v-if="typeof config.punishRules.punishLength[key] !== 'boolean'">
          {{ key }}:
          <input v-model="config.punishRules.punishLength[key]" type="number">
        </div>
        <div v-else>
          {{ key }}:
          <input v-model="config.punishRules.punishLength[key]" type="checkbox">
        </div>
      </div>
    </div>

    <div class="formItem">
      <h4>
        Xp Image Fields:
      </h4>
      <div v-for="field, key in config['xpImageFields']" :key="key" class="multiItem">
        <div v-if="key == 'colour'">
          Text Colour: <input v-model="config['xpImageFields'].colour" type="text">
        </div>
        <div v-else-if="key == 'profilePic'" style="margin-top: 10px;">
          Profile Picture:
          <div v-for="_, picKey in field" :key="picKey">
            {{ picKey }}: <input v-model="config['xpImageFields'].profilePic[picKey]" type="number">
          </div>
        </div>
        <div v-else-if="key == 'fields'" style="margin-top: 10px; display: flex; flex-direction: column; flex-wrap: wrap; max-height: 40rem;">
          Fields and Locations:
          <div v-for="__, i in config['xpImageFields'].fields" :key="i">
            <div v-for="item, itemKey in config['xpImageFields'].fields[i]" :key="item">
              <div v-if="itemKey == 'name'">
                {{ itemKey }}: <input v-model="config['xpImageFields'].fields[i][itemKey]" type="text">
              </div>
              <div v-else>
                {{ itemKey }}: <input v-model="config['xpImageFields'].fields[i][itemKey]" type="number">
              </div>
            </div>
            <div class="removeButton" @click="config['xpImageFields'].fields.splice(i, 1)">
              [Remove]
            </div>
          </div>
          <div class="addButton" @click="config['xpImageFields'].fields.push({name: '', fontSize: 72, x: 0, y: 0})">
            [Add another field]
          </div>
        </div>
      </div>
    </div>

    <div class="formItem toggle">
      <h4>
        Use Verification:
      </h4>
      <input v-model="config['useVerify']" type="checkbox">
    </div>

    <div class="formItem">
      <h4>
        Verify Channel ID:
      </h4>
      <input v-model="config['verifyChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Roles Channel ID:
      </h4>
      <input v-model="config['roleChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        NSFW Roles Channel ID:
      </h4>
      <input v-model="config['nsfwRoleChannels']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Pending Verification Channel ID:
      </h4>
      <input v-model="config['pendingVerificationChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Verification Logging Channel ID:
      </h4>
      <input v-model="config['verificationLogChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Verified Welcome Channel ID:
      </h4>
      <input v-model="config['verifiedWelcomeChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        NSFW Verified Welcome Channel ID:
      </h4>
      <input v-model="config['nsfwVerifiedWelcomeChannel']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Welcome Role:
      </h4>
      <input v-model="config['welcomeRole']" type="text">
    </div>

    <div class="formItem">
      <h4>
        Verified Welcome Channel Message:
      </h4>
      <textarea v-model="config['verifiedWelcomeChannelMessage']" style="height: 200px; width: 250px; resize: none;" />
    </div>

    <div class="formItem">
      <h4>
        Verify Questions:
      </h4>
      <div v-for="x, y in config['verifyQuestions']" :key="y" class="multiItem">
        <div>
          <div>Question: <input v-model="config['verifyQuestions'][y].question" type="text"></div>
          <div>
            Style:
            <select v-model="config['verifyQuestions'][y].style">
              <option>
                1
              </option>
              <option>
                2
              </option>
            </select>
          </div>
          <div>Required: <input v-model="config['verifyQuestions'][y].required" type="checkbox"></div>
          <div class="removeButton" @click="config['verifyQuestions'].splice(y, 1)">
            [Remove]
          </div>
        </div>
      </div>
      <div class="addButton" @click="config['verifyQuestions'].push({question: '', required: false, style: 1})">
        [Add another field]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Verify Emojis:
      </h4>
      <div v-for="_, key in config['verifyEmojis']" :key="_" class="multiItem">
        Emoji: <input v-model="config['verifyEmojis']" type="text">
        <div class="removeButton" @click="config['verifyEmojis'].splice(key, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['verifyEmojis'].push('<:willWut:1075517791660167250>')">
        [Add another field]
      </div>
    </div>
    <div class="formItem">
      <h4>
        Verify Accept Roles:
      </h4>
      <div v-for="_, key in config['verifyAcceptRoles']" :key="_" class="multiItem">
        Role ID: <input v-model="config['verifyAcceptRoles'][key]" type="text">
        <div class="removeButton" @click="config['verifyAcceptRoles'].splice(key, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['verifyAcceptRoles'].push('')">
        [Add another field]
      </div>
    </div>
    <div class="formItem">
      <h4>
        Verify NSFW Accept Roles:
      </h4>
      <div v-for="_, key in config['verifyNsfwAcceptRoles']" :key="_" class="multiItem">
        Role ID: <input v-model="config['verifyNsfwAcceptRoles'][key]" type="text">
        <div class="removeButton" @click="config['verifyNsfwAcceptRoles'].splice(key, 1)">
          [Remove]
        </div>
      </div>
      <div class="addButton" @click="config['verifyNsfwAcceptRoles'].push('')">
        [Add another field]
      </div>
    </div>
  </div>
  <div v-else>
    Loading config...
  </div>
</template>

<style scoped lang="scss">
div {
  width: fit-content;
}
.form {
  max-height: 50rem;
  width: fit-content;
  display: flex;
  gap: 0 20px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}
.formItem {
  max-height: fit-content;
  h4 {
    margin-bottom: 5px;
    color: #ffa500;
  }
}
.multiItem {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
  gap: 5px;
}
.toggle {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 15px;
  h4 {
    margin: 0;
  }
}
.addButton {
  cursor: pointer;
  margin-top: 10px;
}
.removeButton {
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 5px;
}
</style>
