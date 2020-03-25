import axios from 'axios';
const redditAPI = 'https://www.reddit.com';
const firebaseAppAPI = 'https://us-central1-wml-reddit.cloudfunctions.net';

const api = {
  getSubreditPosts: async (name, sortBy) => {
    try {
      const response = await axios.get(`${redditAPI}/r/${name}/${sortBy}.json`);
      return response.data.data.children.map(item => {
        return item.data;
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getSubredit: async name => {
    try {
      const response = await axios.get(`${redditAPI}/r/${name}/about.json`);
      return response.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getPost: async id => {
    try {
      const response = await axios.get(`${redditAPI}${id}.json`);
      return {
        postData: response.data[0].data.children[0].data,
        comments: response.data[1].data.children
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getChildComments: async (linkId, children) => {
    try {
      const response = await axios.get(
        `${firebaseAppAPI}/getChildren?link_id=t3_${linkId}&children=${children}`
      );
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getUser: async id => {
    try {
      const response = await axios.get(`${redditAPI}/${id}/about.json`);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getUserComments: async id => {
    try {
      const response = await axios.get(`${redditAPI}/${id}/comments.json`);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
};

export default api;
