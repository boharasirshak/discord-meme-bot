# Discord Meme bot

---
<br>

## Introduction

A discord bot written in NodeJs using **discord.js** and **snoowrap** 

<br>

## Installation

> `git clone https://github.com/sirshakbohara/discord-meme-bot.git`

**OR**

> Download the zip file from [here](https://github.com/sirshakbohara/discord-meme-bot/archive/refs/heads/master.zip) then extract using any zip extractor

> Open command line on the project directory and run 

* `npm install`
* `yarn install`

<br>

#

<br>

## Getting the reddit variables

*  Create an account on reddit and join some meme's subreddits

*  Goto [here](https://www.reddit.com/prefs/apps)

*  Click on `create another app..`
*  Make sure its of type **web app**

*  Name it anything.

*  Add description if you want 

*  On the **redirect uri** add this `https://not-an-aardvark.github.io/reddit-oauth-helper/`

*  Under the **web app** you will get your *client id*

*  Get your *secret* token

*  Now goto [here](https://not-an-aardvark.github.io/reddit-oauth-helper/)

*  Add your *client id* and *secret token* and check **premanent ?** checkbox

*  Give all permissions

*  Click **Generate Token** button

*  It will redirect you to new tab, click **allow**

*  Return to the page, you will see **Refresh token** and **Access token** fields. Copy the **Refresh token**

<br>

#

<br>

## Getting the discord variables

* Create a discord account, if you don't have one

<br>

#

<br>

## Setup

* Create a new file named `.env` and copy contents from `.env.example` file

**OR** 
 
* create environment variables according to the `.env.example` file.

* Add respective values