const redditAPI = 'https://www.reddit.com';
const api = {
  getSubreditPosts: (name, sortBy) => {
    return fetch(`${redditAPI}/r/${name}/${sortBy}.json`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        return data.data.children.map(item => {
          return item.data;
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  getSubredit: name => {
    return fetch(`${redditAPI}/r/${name}/about.json`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  getPost: id => {
    return fetch(`${redditAPI}${id}.json`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return {
          postData: data[0].data.children[0].data,
          comments: data[1].data.children
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default api;
