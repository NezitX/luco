const axios = require('axios');

class Vote {
  
  constructor(options = {}) {
    this.options = options;
    if (!this.options.token) return this.error(`Cannot find the token`);
    if (!this.options.id) return this.error(`Cannot find the bot ID`);
    let last = '';
  };

  error(msg) {
    console.error(`Luco Error: ${msg}`);
  };
  
  async fetchApi(botId = this.options.id, token = this.options.token) {
    const url = `https://ampeiwywkdwp.efoodzhlpfzbk.repl.co/get-info/?source=${botId}&manga=${token}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  async onVote(callback) {
    setInterval(async () => {
      try {
        let data = await this.fetchApi();
        if (data.err) return this.error(data.msg);
        if (data.none) return;
        if (last === data.title) return;
        last = data.title;

        callback(data.userId, data.botName, data.votesCount);
      } catch (error) {
        console.error(error);
      }
    }, 5000);
  };
}

module.exports = {
  Vote
}