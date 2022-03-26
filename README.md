# Discord Meme bot

---
<br>

## Introduction

A discord bot written in NodeJs using **discord.js** and **snoowrap** 

<br>

## Installation

`git clone https://github.com/sirshakbohara/discord-meme-bot.git`

**OR**

* Download the zip file from [here](https://github.com/sirshakbohara/discord-meme-bot/archive/refs/heads/master.zip) then extract using any zip extractor

* Open command line on the project directory and run 

* `npm install` or `yarn install`

<br>

#

<br>

## Setup

* Create a new file named `.env` and copy contents from `.env.example` file <br> **OR**  <br> Create environment variables according to the `.env.example` file.

* Add respective values

<br>

#

<br>

## Getting the reddit variables

*  Create an account on reddit 

* Join some meme's subreddits [*Optional*].

*  Goto [Reddit developer apps section](https://www.reddit.com/prefs/apps).

*  Click on `create another app..`
*  Make sure its of type **web app**.

*  Name it anything.

*  Add description if you want [*Optional*].

*  On the **redirect uri** add this `https://not-an-aardvark.github.io/reddit-oauth-helper/`.

*  Under the **web app** you will get your *client id*.

*  Get your *secret* token.

*  Now goto [Reddit Oauth helper](https://not-an-aardvark.github.io/reddit-oauth-helper/).

*  Add your *client id* and *secret token* and check **premanent ?** checkbox.

*  Give all permissions.

*  Click **Generate Token** button.

*  It will redirect you to new tab, click **allow**.

*  Return to the page, you will see **Refresh token** and **Access token** fields. Copy them.

<br>

#

<br>

## Getting the discord variables

* Create a discord account, if you don't have one.

* Goto [Discord developer portal](https://discord.com/developers/applications).

* Create a new application.

* Name it as your wish

* Add app icon and description if you wish [*Optional*].

* Goto **Bot** section and click **Add bot** button.

* Give it username as per your choice.

* Add bot icon [*Optional*]

* Copy your _Bot Token_, if you don't see one, click on **Reset Token** button.

* Now you can add the bot to any discord server

<br>

#

<br>

## Bot commands

**Note** : ***Edit your prefix from the .env file***, default prefix is **!** .

1. > !**ping** :- Check if the bot is alive or not

2. > !**cmds** :- See bot commands.

3. > !**meme** :- gets meme from the default subreddit.

4. > !**memez {_subreddit_}** :- gets meme from the specified subreddit.


**Note** : Default Subreddits can be edited from **data/constants.js** file.