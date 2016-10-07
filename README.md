# Serverless Facebook Messenger Bot

Serverless service which provides you a basic Facebook Messenger Chatbot scaffold.

## Installation

Make sure that you use Serverless v1.

1. Run `npm install` to install all the necessary npm packages
2. Setup your Facebook Messenger Chatbot app
3. Setup the Facebook Fanpage for your Chatbot
4. Connect the Facebook Fanpage with the Facebook Messenger app
5. Replace the `accessToken` variable in the `handler.js` file with your Fanpage token
6. Run `serverless deploy` to deploy your chatbot
7. Chat with the bot through the Fanpage (or your Facebook Messenger app on your smartphone)

## AWS Services used

- Lambda
- API Gateway
