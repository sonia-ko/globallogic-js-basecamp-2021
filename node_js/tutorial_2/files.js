const fs = require("fs");

let catsArr, dogsArr;

fs.readFile("cats.txt", "utf-8", (error, data) => {
  if (error) {
    return;
  }
  catsArr = data.toString().split(" ");
});

fs.readFile("dogs.txt", "utf-8", (error, data) => {
  if (error) {
    return;
  }
  dogsArr = data.toString().split(" ");
});

function files(picture) {
  const PICTURES = {
    dogs: {
      imgs: dogsArr,
      randomNumber: Math.floor(Math.random() * dogsArr.length),
    },
    cats: {
      imgs: catsArr,
      randomNumber: Math.floor(Math.random() * catsArr.length),
    },
  };
  const obj = PICTURES.picture;

  return PICTURES[picture].imgs[PICTURES[picture].randomNumber];
}

module.exports = files;
