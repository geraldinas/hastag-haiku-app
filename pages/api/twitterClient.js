"use server";
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  token_secret: process.env.ACCESS_SECRET,
  bearer_token: process.env.BEARER_TOKEN,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

module.exports = { twitterClient, twitterBearer };