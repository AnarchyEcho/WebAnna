---
title: 'Commands'
description: 'List of commands and how to use them.'
---

## [General Commands]{style="color: #ffa500"}

[***All commands have the normal anna call and a special character (default is a dot: . ) interchangeably.***]{style="color: #ffa555"}

### [Leaderboard]{style="color: #ffa500"}
**Summary**: Sends a leaderboard for the selected {category} in the channel.

**Alias**: lb, leaderboard.

**Usage**: anna lb {category}

**Categories**: experience, currency.

**Explanation**: {category} is ***required***.

<br>

---

<br>

## [Economy commands]{style="color: #ffa500"}

### [Shop]{style="color: #ffa500"}
**Summary**: Opens the shop in the channel the command was used in.

**Usage**: anna shop

<br>

---

<br>

## [Moderator+ commands]{style="color: #ffa500"}

### [ShopAdd]{style="color: #ffa500"}
**Summary**: Adds an item to the shop, or replaces an existing one, decided by which {orderId} you choose.

**Alias**: shopadd, shopadditem.

**Usage**: anna shopadd {orderId} {price} {roleId}

**Explanation**: All {queries} are ***required***, {orderId} / {price} / {roleId} are all **numbers**,

<br>

### [ShopDescription]{style="color: #ffa500"}
**Summary**: Edits item {id}'s description in the shop.

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