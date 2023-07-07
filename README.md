<p align="center">
  <a href="https://luco-list.xyz">
    <img width="300" src="https://media.discordapp.net/attachments/1084071451109359707/1126740633047027892/Picsart_23-07-07_08-04-55-397.png" alt="lucolist">
  </a>
</p>

<div align="center">
  <b>The Official Api From <a herf="https://luco-list.xyz">Luco List</a>, Which Make Know Who Vote To Your Bot In Our List And More ...</b>
</div>

---

<br/>

<div align="center">

[![NPM downloads][download-image]][download-url] &nbsp; &nbsp;
[![NPM version][npm-image]][npm-url] &nbsp; &nbsp;
![License](https://img.shields.io/npm/l/luco) &nbsp; &nbsp;
![Website](https://img.shields.io/website?url=https%3A%2F%2Fluco-list.xyz&label=luco-list.xyz) &nbsp; &nbsp;

[npm-image]: https://img.shields.io/npm/v/luco.svg?color=green
[npm-url]: https://npmjs.org/package/luco
[download-image]: https://img.shields.io/npm/dt/luco.svg?color=3182b0
[download-url]: https://npmjs.org/package/luco

  </div>

<br />

<div align = "center">

**[ Support ](https://discord.gg/BqG6UKeHkU)** | **[ Website ](https://luco-list.xyz)** | **[ NPM ](https://npmjs.org/package/luco)**

</div>

---

## About

Luco is Api made for connecting your bot with our website.

It is free to use, very simple, and make you connect with our api easily with just few steps.

Luco had many examples and functions like information, votes and more in future.

## Features

-   **very simple** and easy to use.
-   **faster** and have many options to use.
-   **Support** to help you in our discord 24/7.
-   **many functions** to use with powerful optimization.

## How it Work

Luco check the api if any user vote to your bot in our website every *3m* and send that message to channel that you choose and done that simple.

## Installation
```bash
npm i luco
```

## Setup
Setup your luco by just few steps :

```javascript
const { Client } = require('discord.js');
const client = new Client();

const { lucoBot } = require('luco');

const vote = new lucoBot.Vote({
  client: client,
  id: "YOUR DISCORD BOT ID",
  token: "YOUR DISCORD BOT TOKEN IN LIST",
  channel: 'CHANNEL ID TO SEND THE MESSAGE',
  message: `{user} vote {bot} now is {count}`,
  reward: (user) => {
    //CODE
  }
});
```

-  `{user}` The user Id.
-  `{bot}` Your bot Id.
-  `{count}` All votes count.

## Parameters

| Name | Description | type | required|
| -------- | -------- | -------- | -------- |
| `client` | Your discord client. | discord client | `true` 
| `id` | Your discord bot ID. | String | `true`
| `token` | Your discord bot token in our list. | String | `true`
| `channel` | Your channel ID that the message will be send. | String | `true`
| `message` | Your message that will be send. | String or Object | `true`
| `reward` | The reward when user vote to the bot. | Function | `false`

## Advance Usage `(message)`
You can use discord Embeds by message object:
```javascript
const vote = new lucoBot.Vote({
  client: client,
  id: "YOUR DISCORD BOT ID",
  token: "YOUR DISCORD BOT TOKEN IN LIST",
  channel: 'CHANNEL ID TO SEND THE MESSAGE',
  message: {
    content: `{user} vote {bot} now is {count}`,
    embeds: []
  },
  reward: (user) => {
    //CODE
  }
});
```
You can check <a herf="https://discordjs.guide/">Message Components or Embeds</a> on discord guide for more information.
> :warning: **If you are using embed**: the `{user}`, `{bot}` and `{count}` will work only in embed Description only.

## Help
Any errors or problems you encounter while using luco, we will be happy to assist you our <a herf="https://discord.gg/BqG6UKeHkU">discord server</a>

## License

Luco is licensed under the [Apache License 2.0](./LICENSE).