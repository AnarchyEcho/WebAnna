---
title: 'Commands'
description: 'List of commands and how to use them.'
---

## [General Commands]{style="color: #ffa500"}

[***All commands have the normal anna call and a special character (configurable, default is a dot: . ) interchangeably.***]{style="color: #ffa555"}


### [Commands]{style="color: #ffa500"}
**Summary**: Sends a link to this page.

**Alias**: commands.

**Usage**: anna commands

**Explanation**: No queries required.

<br>

### [Leaderboard]{style="color: #ffa500"}
**Summary**: Sends a leaderboard for the selected {category} in the channel.

**Alias**: lb, leaderboard.

**Usage**: anna lb {category}

**Categories**: experience, currency.

**Explanation**: {category} is ***required***.

<br>

### [Pic]{style="color: #ffa500"}
**Summary**: Sends a random image of {category}.

**Alias**: pic.

**Usage**: anna pic {category}

**Categories**: meme. (more to come, need more images).

**Explanation**: {category} is ***required***.

<br>

### [MyWarnings]{style="color: #ffa500"}
**Summary**: Shows your currently yet to expire warnings, how long they have left until expiring, and reason.

**Alias**: mywarnings.

**Usage**: anna mywarnings

**Explanation**: No queries required.

<br>

---

<br>

## [Economy commands]{style="color: #ffa500"}

### [Balance]{style="color: #ffa500"}
**Summary**: Tells you how much currency you have.

**Alias**: bal, balance.

**Usage**: anna bal

**Explanation**: No queries required.

<br>

### [Work]{style="color: #ffa500"}
**Summary**: Gives you a configurable random amount of currency, this task has a configurable cooldown to stop spamming of it.

**Alias**: work.

**Usage**: anna work

**Explanation**: No queries required.

<br>

### [Shop]{style="color: #ffa500"}
**Summary**: Opens the shop in the channel the command was used in.

**Alias**: shop.

**Usage**: anna shop

**Explanation**: No queries required.

<br>

### [Buy]{style="color: #ffa500"}
**Summary**: Buys item nr {itemNumber} from the shop, giving you what it details.

**Alias**: buy.

**Usage**: anna buy {itemNumber}

**Explanation**: {itemNumber} is a **number** and is ***required***.

<br>

### [Sell]{style="color: #ffa500"}
**Summary**: Sells item nr {itemNumber} from the shop, refunding you an amount of what you bought it for and removing it from you.

**Alias**: sell.

**Usage**: anna sell {itemNumber}

**Explanation**: {itemNumber} is a **number** and is ***required***.

<br>

---

<br>

## [Gambling commands]{style="color: #ffa500"}

### [Roulette]{style="color: #ffa500"}
**Summary**: Spins the roulette wheel, gambling your {bet} for a chance of making it big, as long as you own that much currency to bet with.

**Alias**: wheel, roulette.

**Usage**: anna roulette {bet}

**Explanation**: {bet} can be a **number** or **all**, and is ***required***.

<br>

### [Flip]{style="color: #ffa500"}
**Summary**: Flip a coin, gambling your {bet} for a chance of making it big, as long as you own that much currency to bet with (Heads is win).

**Alias**: flip.

**Usage**: anna flip {bet}

**Explanation**: {bet} can be a **number** or **all**, and is ***required***.

<br>

---

<br>

## [Moderator+ commands]{style="color: #ffa500"}

[***These are commands you need to have specific roles, typically moderator+ roles to use.***]{style="color: #ffa555"}

### [ShopAdd]{style="color: #ffa500"}
**Summary**: Adds an item to the shop, or replaces an existing one, decided by which {orderId} you choose.

**Alias**: shopadd, shopadditem.

**Usage**: anna shopadd {orderId} {price} {roleId}

**Explanation**: All {queries} are **numbers** and are ***required***.

<br>

### [ShopDescription]{style="color: #ffa500"}
**Summary**: Edits item nr {id}'s description in the shop.

**Alias**: shopdesc, shopdescription.

**Usage**: anna shoprm {id} {"description"}

**Explanation**: {id} is the **id number** of the shop item, {"description"} needs the "" around the description you write, and are both ***required***.

<br>

### [ShopRemove]{style="color: #ffa500"}
**Summary**: Removes item {id} from the shop.

**Alias**: shoprm, shopremove.

**Usage**: anna shoprm {id}

**Explanation**: {id} is the **id number** of the shop item and is ***required***.

<br>

### [Warnings]{style="color: #ffa500"}
**Summary**: Shows selected {userId}'s unexpired warnings.

**Alias**: warnings.

**Usage**: anna warnings {userId}

**Explanation**: {userId} is the **userId number** of the member and is ***required***.

<br>

### [Warn]{style="color: #ffa500"}
**Summary**: Warns selected {userId}, which expires in {time} amount of minutes, potentially giving them a rule-assigned punishment (configurable) and sends them a DM telling them of the {reason} they were warned.

**Alias**: warn.

**Usage**: anna warn {userId} {time} {"reason"}

**Explanation**: {userId} and {time}(in minutes) are **numbers**, {"reason"} needs the "" around the message detailing the reason, and are all ***required***.

<br>

### [Forgive]{style="color: #ffa500"}
**Summary**: Forgives selected {userId}, marking warning nr {warningId} as forgiven.

**Alias**: forgive.

**Usage**: anna forgive {userId} {warningId}

**Explanation**: {userId} and {warningId} are **numbers** and are both ***required***.

<br>

### [Unmute]{style="color: #ffa500"}
**Summary**: Unmutes selected {userId}, removing their timeout or giving them back their roles, depending on what your configuration settings are, this also runs automatically every 5 minutes, checking for expired mutes to revoke.

**Alias**: unmute.

**Usage**: anna unmute {userId}

**Explanation**: {userId} is a **number** and is ***required***.

<br>

### [Feeds]{style="color: #ffa500"}
**Summary**: Shows you which feeds the current or chosen channel has subscribed to.

**Alias**: feeds, feedlist.

**Usage**: anna feeds {channelId}

**Explanation**: {channelId} is a **number** and is ***optional***.

<br>

### [FeedAdd]{style="color: #ffa500"}
**Summary**: Adds a feed to the current or chosen channel.

**Alias**: feedadd.

**Usage**: anna feedadd {url, example: https://www.reddit.com/r/ProgrammerHumor/new.json} {channelId}

**Explanation**: {url} is a **string** is ***required***, {channelId} is a **number** and is ***optional***.

<br>

### [FeedRemove]{style="color: #ffa500"}
**Summary**: Removes a feed from the current or chosen channel.

**Alias**: feedrm, feedremove, feeddel.

**Usage**: anna feedrm {sortId} {channelId}

**Explanation**: {sortId} is a **number** is ***required***, {channelId} is a **number** and is ***optional***.

<br>
