'use strict';

const axios = require('axios');

module.exports.webhook = (event, context, callback) => {
  if (event.method === 'GET') {
    // Facebook app verification
    if (event.query['hub.verify_token'] === '<strong-token>' && event.query['hub.challenge']) {
      callback(null, parseInt(event.query['hub.challenge']));
    }
    callback('Invalid token');
  }

  if (event.method === 'POST') {
    event.body.entry.map((entry) => {
      entry.messaging.map((messagingItem) => {
        if (messagingItem.message && messagingItem.message.text) {
          const accessToken = '<access-token>'; // TODO: replace this token before deployment

          const url = `https://graph.facebook.com/v2.6/me/messages?access_token=${accessToken}`;

          const payload = {
            recipient: {
              id: messagingItem.sender.id
            },
            message: {
              text: 'Hello World!'
            }
          };

          axios.post(url, payload).then((response) => callback(null, response));
        }
      });
    });
  }
};
