# Serverless Facebook Messenger Bot

Serverless service which provides you a basic Facebook Messenger Chatbot scaffold.

## Installation

Make sure that you use Serverless v1.

**Note:** You might want to look take a look at the Facebook Messenger Platform [quickstart guide](https://developers.facebook.com/docs/messenger-platform/quickstart) or the Facebook Messenger Platform [in-depth documentation](https://developers.facebook.com/docs/messenger-platform/product-overview/setup).

1. Run `serverless install --url https://github.com/pmuens/serverless-facebook-messenger-bot` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-facebook-messenger-bot`
3. Run `npm install` to install all the necessary npm packages
4. Setup your Facebook Messenger Chatbot app
5. Setup the Facebook Fanpage for your Chatbot
6. Connect the Facebook Fanpage with the Facebook Messenger app
7. Replace the `accessToken` variable in the `handler.js` file with your Fanpage token
8. Run `serverless deploy` to deploy your chatbot
9. Chat with the bot through the Fanpage (or your Facebook Messenger app on your smartphone)

## AWS Services used

- Lambda
- API Gateway
