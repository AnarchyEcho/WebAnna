---
title: 'Commands'
description: 'List of commands and how to use them.'
---

## [General Commands]

[All commands have the normal anna call and a special character (configurable, default is a dot: . ) interchangeably.]{.info}


### [Commands]
**Summary**: Sends a link to this page.

**Alias**: commands.

**Usage**: anna commands

**Explanation**: No queries required.

<br>

### [Leaderboard]
**Summary**: Sends a leaderboard for the selected {category} in the channel.

**Alias**: lb, leaderboard.

**Usage**: anna lb {category}

**Categories**: experience/exp, currency/cur.

**Explanation**: {category} is ***required***.

<br>

### [Pic]
**Summary**: Sends a random image of {category}.

**Alias**: pic.

**Usage**: anna pic {category}

**Categories**: meme. (more to come, need more images).

**Explanation**: {category} is ***required***.

<br>

### [MyWarnings]
**Summary**: Shows your currently yet to expire warnings, how long they have left until expiring, and reason.

**Alias**: mywarnings.

**Usage**: anna mywarnings

**Explanation**: No queries required.

<br>

### [Experience]
**Summary**: Shows an image with your experience, needed exp to next level, and other stats depending on the config of the server.

**Alias**: xp, exp, experience.

**Usage**: anna exp

**Explanation**: No queries required.

<br>

<br>

### [Gift]
**Summary**: Gifts an user an amount of your currency.

**Usage**: anna gift {userId} {amount}

**Explanation**: {userId} and {amount} are both **numbers** and are ***required***.

<br>

---

<br>

## [Economy commands]

### [Balance]
**Summary**: Tells you how much currency you have.

**Alias**: bal, balance.

**Usage**: anna bal

**Explanation**: No queries required.

<br>

### [Work]
**Summary**: Gives you a configurable random amount of currency, this task has a configurable cooldown to stop spamming of it.

**Alias**: work.

**Usage**: anna work

**Explanation**: No queries required.

<br>

### [Shop]
**Summary**: Opens the shop in the channel the command was used in.

**Alias**: shop.

**Usage**: anna shop

**Explanation**: No queries required.

<br>

### [Buy]
**Summary**: Buys item nr {itemNumber} from the shop, giving you what it details.

**Alias**: buy.

**Usage**: anna buy {itemNumber}

**Explanation**: {itemNumber} is a **number** and is ***required***.

<br>

### [Sell]
**Summary**: Sells item nr {itemNumber} from the shop, refunding you an amount of what you bought it for and removing it from you.

**Alias**: sell.

**Usage**: anna sell {itemNumber}

**Explanation**: {itemNumber} is a **number** and is ***required***.

<br>

---

<br>

## [Gambling commands]

### [Roulette]
**Summary**: Spins the roulette wheel, gambling your {bet} for a chance of making it big, as long as you own that much currency to bet with.

**Alias**: wheel, roulette.

**Usage**: anna roulette {bet}

**Explanation**: {bet} can be a **number** or **all**, and is ***required***.

<br>

### [Flip]
**Summary**: Flip a coin, gambling your {bet} for a chance of making it big, as long as you own that much currency to bet with (Heads is win).

**Alias**: flip.

**Usage**: anna flip {bet}

**Explanation**: {bet} can be a **number** or **all**, and is ***required***.

<br>

---

<br>

## [Moderator+ commands]

[These are commands you need to have specific roles, typically moderator+ roles to use.]{.info}

### [ShopAdd]
**Summary**: Adds an item to the shop, or replaces an existing one, decided by which {orderId} you choose.

**Alias**: shopadd, shopadditem.

**Usage**: anna shopadd {type(role|etc)} {orderId} {price} {roleId|name} and if type is etc then {key/message}

**Explanation**: {orderId}, {price}, and {roleId} are **numbers** and are ***required***, {type(role|etc)}, {name}, and {key/message} are **strings** and are ***required***.

<br>

### [ShopDescription]
**Summary**: Edits item nr {id}'s description in the shop.

**Alias**: shopdesc, shopdescription.

**Usage**: anna shoprm {id} {"description"}

**Explanation**: {id} is the **id number** of the shop item, {"description"} needs the "" around the description you write, and are both ***required***.

<br>

### [ShopRemove]
**Summary**: Removes item {id} from the shop.

**Alias**: shoprm, shopremove.

**Usage**: anna shoprm {id}

**Explanation**: {id} is the **id number** of the shop item and is ***required***.

<br>

### [Warnings]
**Summary**: Shows selected {userId}'s unexpired warnings.

**Alias**: warnings.

**Usage**: anna warnings {userId}

**Explanation**: {userId} is the **userId number** of the member and is ***required***.

<br>

### [Warn]
**Summary**: Warns selected {userId}, which expires in {time} amount of minutes, potentially giving them a rule-assigned punishment (configurable) and sends them a DM telling them of the {reason} they were warned.

**Alias**: warn.

**Usage**: anna warn {userId} {time} {"reason"}

**Explanation**: {userId} and {time}(in minutes) are **numbers**, {"reason"} needs the "" around the message detailing the reason, and are all ***required***.

<br>

### [Forgive]
**Summary**: Forgives selected {userId}, marking warning nr {warningId} as forgiven.

**Alias**: forgive.

**Usage**: anna forgive {userId} {warningId}

**Explanation**: {userId} and {warningId} are **numbers** and are both ***required***.

<br>

### [Unmute]
**Summary**: Unmutes selected {userId}, removing their timeout or giving them back their roles, depending on what your configuration settings are, this also runs automatically every 5 minutes, checking for expired mutes to revoke.

**Alias**: unmute.

**Usage**: anna unmute {userId}

**Explanation**: {userId} is a **number** and is ***required***.

<br>

### [Feeds]
**Summary**: Shows you which feeds the current or chosen channel has subscribed to.

**Alias**: feeds, feedlist.

**Usage**: anna feeds {channelId}

**Explanation**: {channelId} is a **number** and is ***optional***.

<br>

### [FeedAdd]
**Summary**: Adds a feed to the current or chosen channel.

**Alias**: feedadd.

**Usage**: anna feedadd {url, **example**:
[https://www.reddit.com/r/ProgrammerHumor/new.json](https://www.reddit.com/r/ProgrammerHumor/new.json)
} {channelId}

**Explanation**: {url} is a **string** and is ***required***, {channelId} is a **number** and is ***optional***.

<br>

### [FeedRemove]
**Summary**: Removes a feed from the current or chosen channel.

**Alias**: feedrm, feedremove, feeddel.

**Usage**: anna feedrm {sortId} {channelId}

**Explanation**: {sortId} is a **number** is ***required***, {channelId} is a **number** and is ***optional***.

<br>

<br>

### [Alias]
**Summary**: Assigns a different trigger for a commmand.

**Usage**: anna alias {commandName} {alias}

**Explanation**: {commandName} and {alias} are both **strings** and are ***required***.

<br>

<br>

### [Give]
**Summary**: Gives an user currency.

**Usage**: anna give {userId} {amount}

**Explanation**: {userId} and {amount} are both **numbers** and are ***required***.

<br>
