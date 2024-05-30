<script lang="ts" setup>
import type { IConfig } from '~/interfaces';

const config = useState<IConfig>('fullConfig');
const errors = useState('configErrors', () => { return new Set<string>([]); });
const onInput = (input: Event, itemName: string, regex: RegExp, emptyAble: boolean) => {
  const val = (input.target as HTMLInputElement).value;
  if (emptyAble) {
    if (!val.match(regex) && val.length > 0) {
      errors.value.add(itemName);
    }
    else if (val.match(regex)) {
      errors.value.delete(itemName);
    }
  }
  if (!emptyAble) {
    if (!val.match(regex) || val.length === 0) {
      errors.value.add(itemName);
    }
    else if (val.match(regex) && val.length > 0) {
      errors.value.delete(itemName);
    }
  }
};
</script>

<template>
  <div v-if="config" class="form">
    <div class="formItem">
      <h4>
        Bot prefix:
      </h4>
      <div v-if="errors.has('botPrefix')" class="error">
        Only accepts .,-_!=?&%¤#$€£ and not empty
      </div>
      <input v-model="config['botPrefix']" style="font-weight: bold;" type="text" @input="(x) => onInput(x, 'botPrefix', /^[^A-Za-z0-9æøåÆØÅ ]$/, false)">
    </div>

    <div class="formItem">
      <h4>
        Bot Channels:
      </h4>
      <div v-for="_, i in config['botChannels']" :key="i" :class="{errorFlex: errors.has('botChannels'+i), multiItem: true}">
        <div v-if="errors.has('botChannels'+i)" class="error">
          Only accepts numbers and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          <input v-model="config.botChannels[i]" type="text" @input="(x) => onInput(x, 'botChannels'+i, /^\d+$/, false)">
          <div style="cursor: pointer;" @click="config['botChannels'].splice(i, 1)">
            [Remove]
          </div>
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
      <div v-for="_, i in config['moderatorRoles']" :key="i" :class="{errorFlex: errors.has('moderatorRoles'+i), multiItem: true}">
        <div v-if="errors.has('moderatorRoles'+i)" class="error">
          Only accepts numbers and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          <input v-model="config.moderatorRoles[i]" type="text" @input="(x) => onInput(x, 'moderatorRoles'+i, /^\d+$/, false)">
          <div style="cursor: pointer;" @click="config['moderatorRoles'].splice(i, 1)">
            [Remove]
          </div>
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
      <div v-if="errors.has('whitelistRoles')" class="error">
        Only accepts numbers and not empty
      </div>
      <div v-for="_, i in config['whitelistRoles']" :key="i" :class="{errorFlex: errors.has('whitelistRoles'), multiItem: true}">
        <input v-model="config.whitelistRoles[i]" type="text" @input="(x) => onInput(x, 'whitelistRoles', /^\d+$/, false)">
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
      <div v-if="errors.has('embedColour')" class="error">
        Only accepts hex code with a length of 3-6
      </div>
      <input v-model="config['embedColour']" type="text" @input="(x) => onInput(x, 'embedColour', /^\w{3,6}$/, false)">
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
      <div v-if="errors.has('memberCountVcId')" class="error">
        Only accepts numbers and not empty
      </div>
      <input v-model="config['memberCountVcId']" type="text" @input="(x) => onInput(x, 'memberCountVcId', /^\d+$/, false)">
    </div>

    <div class="formItem">
      <h4>
        Work Timer:
      </h4>
      <div v-if="errors.has('workTimer')" class="error">
        Only accepts numbers and not empty (can be 0 however)
      </div>
      <input v-model="config['workTimer']" type="number" @input="(x) => onInput(x, 'workTimer', /^\d+$/, false)">
    </div>

    <div class="formItem">
      <h4>
        Work Quotes:
      </h4>
      <div v-pre>
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        You need to put this -> {{amount}} <- where the amount earned should be.
      </div>
      <div v-for="_, i in config['workQuotes']" :key="i" :class="{errorFlex: errors.has('workQuotes'+i), multiItem: true}">
        <div v-if="errors.has('workQuotes'+i)" class="error">
          Can not be empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          <input v-model="config['workQuotes'][i]" style="width: 300px;" type="text" @input="(x) => onInput(x, 'workQuotes'+i, /^.+$/, false)">
          <div style="cursor: pointer;" @click="config['workQuotes'].splice(i, 1)">
            [Remove]
          </div>
        </div>
      </div>
      <div class="addButton" @click="config['workQuotes'].push('')">
        [Add another quote]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Currency:
      </h4>
      <div v-if="errors.has('currency')" class="error">
        Can not be empty
      </div>
      <input v-model="config['currency']" type="text" @input="(x) => onInput(x, 'currency', /(\w+)|(\p{Extended_Pictographic})/u, false)">
    </div>

    <div class="formItem">
      <h4>
        Sell Rate:
      </h4>
      <div v-if="errors.has('sellRate')" class="error">
        Only accepts numbers or decimal numbers and not empty
      </div>
      <input v-model="config['sellRate']" type="text" @input="(x) => onInput(x, 'sellRate', /^(\d+(\.\d+)?)$/, false)">
    </div>

    <div class="formItem toggle">
      <h4>
        Custom Mute:
      </h4>
      <input v-model="config['customMute']" type="checkbox">
    </div>

    <div class="formItem">
      <h4>
        Mute Role ID:
      </h4>
      <div v-if="errors.has('muteRole')" class="error">
        Only accepts numbers or empty
      </div>
      <input v-model="config['muteRole']" type="text" @input="(x) => onInput(x, 'muteRole', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Punish Rules:
      </h4>
      <div v-for="_, i in config['punishRules'].punishments" :key="i" :class="{errorFlex: errors.has('punishRules'+i), multiItem: true}">
        <div v-if="errors.has('punishRules'+i)" class="error">
          Can not be empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          <input v-model="config.punishRules.punishments[i].amount" type="number" @input="(x) => onInput(x, 'punishRules'+i, /^\d+$/, false)">
          <select v-model="config.punishRules.punishments[i].punishment">
            <option v-for="__, key in config['punishRules'].punishLength" :key="key">
              {{ key }}
            </option>
          </select>
          <div style="cursor: pointer;" @click="config['punishRules'].punishments.splice(i, 1)">
            [Remove]
          </div>
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
      <div v-for="_, key in config['punishRules'].punishLength" :key="key" :class="{errorFlex: errors.has('punishRules'+key), multiItem: true}">
        <div v-if="errors.has('punishRules'+key)" class="error">
          Only accepts numbers and not empty
        </div>
        <div v-if="typeof config.punishRules.punishLength[key] !== 'boolean'">
          {{ key }}:
          <input v-model="config.punishRules.punishLength[key]" type="number" @input="(x) => onInput(x, 'punishRules'+key, /^\d+$/, false)">
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
      <div v-for="field, key in config['xpImageFields']" :key="key" :class="{errorFlex: errors.has('xpImageFields'+key), multiItem: true}">
        <div v-if="errors.has('xpImageFields'+key)" class="error">
          Only accepts numbers and not empty
        </div>
        <div v-if="key == 'colour'">
          Text Colour: <input v-model="config['xpImageFields'].colour" type="text" @input="(x) => onInput(x, 'xpImageFields'+key, /\w+/, false)">
        </div>

        <div v-else-if="key == 'profilePic'" style="margin-top: 10px;">
          Profile Picture:
          <div v-for="_, picKey in field" :key="picKey">
            <div v-if="errors.has('xpImageFields'+picKey)" class="error">
              Only accepts numbers and not empty
            </div>
            {{ picKey }}: <input v-model="config['xpImageFields'].profilePic[picKey]" type="number" @input="(x) => onInput(x, 'xpImageFields'+picKey, /^\d+$/, false)">
          </div>
        </div>

        <div v-else-if="key == 'fields'" style="margin-top: 10px; display: flex; flex-direction: column; flex-wrap: wrap; max-height: 40rem;">
          Fields and Locations:
          <div v-for="__, i in config['xpImageFields'].fields" :key="i">
            <div v-for="item, itemKey in config['xpImageFields'].fields[i]" :key="itemKey">
              <div v-if="itemKey == 'name'">
                <div v-if="errors.has('xpImageFields'+itemKey+i)" class="error">
                  Only accepts words with two {}'s around them
                </div>
                {{ itemKey }}: <input v-model="config['xpImageFields'].fields[i][itemKey]" type="text" @input="(x) => onInput(x, 'xpImageFields'+itemKey+i, /^{{[A-z]+}}$/, false)">
              </div>
              <div v-else>
                <div v-if="errors.has('xpImageFields'+itemKey+i)" class="error">
                  Only accepts numbers and not empty
                </div>
                {{ itemKey }}: <input v-model="config['xpImageFields'].fields[i][itemKey]" type="number" @input="(x) => onInput(x, 'xpImageFields'+itemKey+i, /^\d+$/, false)">
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
      <div v-if="errors.has('verifyChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['verifyChannel']" type="text" @input="(x) => onInput(x, 'verifyChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Roles Channel ID:
      </h4>
      <div v-if="errors.has('roleChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['roleChannel']" type="text" @input="(x) => onInput(x, 'roleChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        NSFW Roles Channel ID:
      </h4>
      <div v-for="_, i in config['nsfwRoleChannels']" :key="i" :class="{errorFlex: errors.has('nsfwRoleChannels'+i), multiItem: true}">
        <div v-if="errors.has('nsfwRoleChannels'+i)" class="error">
          Only accepts numbers and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          <input v-model="config['nsfwRoleChannels'][i]" type="text" @input="(x) => onInput(x, 'nsfwRoleChannels'+i, /^\d+$/, false)">
          <div style="cursor: pointer;" @click="config['nsfwRoleChannels'].splice(i, 1)">
            [Remove]
          </div>
        </div>
      </div>
      <div class="addButton" @click="config['nsfwRoleChannels'].push('')">
        [Add another channel]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Pending Verification Channel ID:
      </h4>
      <div v-if="errors.has('pendingVerificationChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['pendingVerificationChannel']" type="text" @input="(x) => onInput(x, 'pendingVerificationChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Verification Logging Channel ID:
      </h4>
      <div v-if="errors.has('verificationLogChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['verificationLogChannel']" type="text" @input="(x) => onInput(x, 'verificationLogChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Verified Welcome Channel ID:
      </h4>
      <div v-if="errors.has('verifiedWelcomeChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['verifiedWelcomeChannel']" type="text" @input="(x) => onInput(x, 'verifiedWelcomeChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        NSFW Verified Welcome Channel ID:
      </h4>
      <div v-if="errors.has('nsfwVerifiedWelcomeChannel')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['nsfwVerifiedWelcomeChannel']" type="text" @input="(x) => onInput(x, 'nsfwVerifiedWelcomeChannel', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Welcome Role:
      </h4>
      <div v-if="errors.has('welcomeRole')" class="error">
        Only accepts numbers
      </div>
      <input v-model="config['welcomeRole']" type="text" @input="(x) => onInput(x, 'welcomeRole', /^\d+$/, true)">
    </div>

    <div class="formItem">
      <h4>
        Verified Welcome Channel Message:
      </h4>
      <div v-pre>
        Words in {{example}} are special,
      </div>
      <div>so if you want custom ones contact me on discord.</div>
      <textarea v-model="config['verifiedWelcomeChannelMessage']" style="height: 200px; width: 250px; resize: none;" />
    </div>

    <div class="formItem">
      <h4>
        Verify Questions:
      </h4>
      <div v-for="x, y in config['verifyQuestions']" :key="y" :class="{errorFlex: errors.has('verifyQuestions'+y), multiItem: true}">
        <div>
          <div v-if="errors.has('verifyQuestions'+y)" class="error">
            Can not be empty
          </div>
          <div>Question: <input v-model="config['verifyQuestions'][y].question" type="text" @input="(x) => onInput(x, 'verifyQuestions'+y, /^\w+\??$/, false)"></div>
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
      <div v-if="config['verifyQuestions'].length < 5" class="addButton" @click="config['verifyQuestions'].push({question: '', required: false, style: 1})">
        [Add another field]
      </div>
    </div>

    <div class="formItem">
      <h4>
        Verify Emojis:
      </h4>
      <div v-for="_, key in config['verifyEmojis']" :key="key" :class="{errorFlex: errors.has('verifyEmojis'+key), multiItem: true}">
        <div v-if="errors.has('verifyEmojis'+key)" class="error">
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          Has to look like <:willWut:1075517791660167250> and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          Emoji: <input v-model="config['verifyEmojis'][key]" type="text" @input="(x) => onInput(x, 'verifyEmojis'+key, /^<:\w+:\d+>$/, false)">
          <div class="removeButton" @click="config['verifyEmojis'].splice(key, 1)">
            [Remove]
          </div>
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
      <div v-for="_, key in config['verifyAcceptRoles']" :key="key" :class="{errorFlex: errors.has('verifyAcceptRoles'+key), multiItem: true}">
        <div v-if="errors.has('verifyAcceptRoles'+key)" class="error">
          Only accepts numbers and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          Role ID: <input v-model="config['verifyAcceptRoles'][key]" type="text" @input="(x) => onInput(x, 'verifyAcceptRoles'+key, /^\d+$/, false)">
          <div class="removeButton" @click="config['verifyAcceptRoles'].splice(key, 1)">
            [Remove]
          </div>
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
      <div v-for="_, key in config['verifyNsfwAcceptRoles']" :key="key" :class="{errorFlex: errors.has('verifyNsfwAcceptRoles'+key), multiItem: true}">
        <div v-if="errors.has('verifyNsfwAcceptRoles'+key)" class="error">
          Only accepts numbers and not empty
        </div>
        <div style="display: flex; gap: 5px; align-items: center;">
          Role ID: <input v-model="config['verifyNsfwAcceptRoles'][key]" type="text" @input="(x) => onInput(x, 'verifyNsfwAcceptRoles'+key, /^\d+$/, false)">
          <div class="removeButton" @click="config['verifyNsfwAcceptRoles'].splice(key, 1)">
            [Remove]
          </div>
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
.errorFlex {
  display: flex;
  flex-direction: column;
}
.error {
  color: #ff3a3a;
  margin-bottom: 2px;
}
</style>
