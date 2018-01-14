const ireland = {
  live: 'Dublin',
  love: 'Galway',
};

function tagged(template, ...values) {
  return template.reduce((acc, val, i) => `${acc} ${values[i - 1]} ${val}`);
}

const text = tagged`I live in ${ireland.live} and I love ${ireland.love}`;
console.log(text);
