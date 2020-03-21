const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const fetch = require('node-fetch');

admin.initializeApp();
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Subreddit {
    description: String
  }
  type Post {
    title: String
  }
  type Feed {
    data: [Post]
  }
  type Query {
    subreddit: Subreddit
    feed: Feed
  }
`;

const resolvers = {
  Query: {
    subreddit: async () => {
      const res = await fetch(
        'https://www.reddit.com/r/Coronavirus/about.json'
      );
      const json = await res.json();
      return json.data;
    },
    feed: async () => {
      const res = await fetch('https://www.reddit.com/r/Coronavirus/top.json');
      const json = await res.json();
      console.log('data', json.data.children);
      const mapped = json.data.children.map(item => {
        return item.data;
      });
      return {
        data: mapped
      };
    }
  }
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/', cors: true });
exports.graphql = functions.https.onRequest(app);
