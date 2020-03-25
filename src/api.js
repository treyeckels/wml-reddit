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
    // return fetch(`${redditAPI}/r/${name}/${sortBy}.json`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //     return data.data.children.map(item => {
    //       return item.data;
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  getSubredit: async name => {
    try {
      const response = await axios.get(`${redditAPI}/r/${name}/about.json`);
      return response.data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }

    // return fetch(`${redditAPI}/r/${name}/about.json`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     return data.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
    // return fetch(`${redditAPI}${id}.json`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     return {
    //       postData: data[0].data.children[0].data,
    //       comments: data[1].data.children
    //     };
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
