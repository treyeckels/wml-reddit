const redditAPI = 'https://www.reddit.com';
const api = {
  getSubredit: name => {
    return fetch(`${redditAPI}/r/${name}/top.json`)
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
  }
};

export default api;
