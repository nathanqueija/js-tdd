const axios = require('axios');

const defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Hello! It works!');
    } else {
      reject(new Error('Error'));
    }
  }, 2000);
});

defer
  .then((data) => {
    console.log(data);
    return 'foo';
  })
  .then(data => console.log(data))
  .catch(e => console.log(e));

const posts = axios.get('https://willianjusten.com.br/search.json');
posts
  .then(response => console.log(response.data));

