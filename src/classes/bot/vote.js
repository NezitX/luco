const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

class Vote {
  constructor(options = {}) {
    this.options = options;
    if (!this.options.token) return this.error(`Cannot find the token`);
    if (!this.options.id) return this.error(`Cannot find the bot ID`);
    if (!this.options.channel) return this.error(`Cannot find the channel ID`);
    if (!this.options.message) return this.error(`Cannot find the message`);
    this.last = '';
    this.onVote();
  }

  error(msg) {
    console.error(`Luco Error: ${msg}`);
  }

  async fetchApi(botId = this.options.id, token = this.options.token) {
    const url = `https://luco-list.xyz/api/v1/vote/id/${botId}/token/${token}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return;
    }
  }

  replaceData(text, data) {
    return text.replace(/{([^}]+)}/g, (match, key) => {
      if (data && typeof data === 'object') {
        return data[key] || match;
      }
      return match;
    });
  }

  async onVote() {
    setInterval(async () => {
      try {
        let data = await this.fetchApi();
        if (!data) return;
        if (data.err) return this.error(data.msg);
        if (data.none) return;
        if (this.last === data.user) return;
        this.last = data.user;

        if (this.options.client) {
          let client = this.options.client;
          let channel = this.options.channel;
          let message = this.options.message;
          let msg;

          if (typeof message === 'string') {
            msg = this.replaceData(message, data);
          } else if (typeof message === 'object') {
            msg = { ...message };
            if (msg.content) {
              msg.content = this.replaceData(msg.content, data);
            }
            if (msg.embeds && Array.isArray(msg.embeds)) {
              msg.embeds = msg.embeds.map((embed) => {
                if (embed instanceof EmbedBuilder) {
                  embed = embed.toJSON();
                }
                if (embed.description) {
                  embed.description = this.replaceData(embed.description, data);
                } else if (embed.setDescription) {
                  embed.setDescription(this.replaceData(embed.setDescription, data));
                }
                return embed;
              });
            }
          }

          if (!client.channels.cache.get(channel)) return this.error(`Cannot Find Channel ${channel}, please check if channel doesn't exist`)
          await client.channels.cache.get(channel).send(msg);
        }

        if (typeof this.options.reward === 'function') {
          this.reward(data.user, this.options.reward);
        }

      } catch (error) {
        this.error(error)
      }
    }, 180000);
  }

  reward(user, callback) {
    callback(user);
  }

}

module.exports = {
  Vote,
};