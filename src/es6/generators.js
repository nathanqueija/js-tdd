// Generators a type of Iterator

const axios = require('axios');

function* teste() {
  yield 1;
  yield 2;
  yield 3;
}

const ok = teste();
ok.next();
ok.next();
console.log(ok.next());

let dados = null;

function ajax(url) {
  axios.get(url)
    .then(response => dados.next(response.data));
}

function* ajaxGen() {
  console.log('Fetching posts');
  const posts = yield ajax('https://willianjusten.com.br/search.json');
  console.log(posts);

  console.log('Fetching github data');
  const git = yield ajax('https://api.github.com/users/nathanqueija');
  console.log(git);

  console.log('Fetching github data');
  const git2 = yield ajax('https://api.github.com/users/nathanqueija');
  console.log(git2);
}

dados = ajaxGen();

dados.next();
