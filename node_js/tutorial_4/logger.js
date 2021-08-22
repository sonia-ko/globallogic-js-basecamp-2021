const fs = require("fs");

fs.writeFile("statistics.txt", "Images shown:", (error) => {
    if (error) return console.error("Cannot write file");
    console.log("Statistics file created");
});

let counter = 1;

function logger({ link, pets }) {
    fs.readFile("statistics.txt", "utf8", function(err, data) {
        if (err || !link) {
            const newValue =
                data.toString() +
                `
    ${counter})  ${pets} :  The file was not updated due to the error ${
          err || "related to the file" + pets + ".txt"
        } `;
            console.log(newValue);
        } else {
            const newValue =
                data.toString() +
                `
    ${counter})  ${pets} : ${link}`;
            fs.writeFile("statistics.txt", newValue, function() {
                console.log(newValue);
            });
        }
        counter++;
    });
}

module.exports = logger;