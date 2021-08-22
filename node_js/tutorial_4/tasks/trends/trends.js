const fs = require("fs");

let counter = {
    cats: 0,
    dogs: 0,
};

let writeableStream = fs.createWriteStream(
    "tasks/trends/trendingStatistics.txt"
);

exports.catsRequestedEvListener = function() {
    counter.cats++;
    console.log(counter);
    writeableStream.write(`
    cats: ${counter.cats} ; dogs: ${counter.dogs}
    `);
};

exports.dogsRequestedEvListener = function() {
    counter.dogs++;
    writeableStream.write(`
    cats: ${counter.cats} ; dogs: ${counter.dogs}
    `);
};