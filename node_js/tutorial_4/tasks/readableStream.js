const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { pipeline } = require("stream");

const writeableStream = fs.createWriteStream("cats.text.gz");
const gzip = zlib.createGzip();
const readableStream = fs.createReadStream("api/cats.txt", "utf8");

function compressPetsLinks() {
    // The first way to compress file

    let data = ``;
    readableStream.on("data", function(chunk) {
        data = data + chunk;
    });
    readableStream.on("end", function() {
        console.log(data);
    });

    readableStream
        .pipe(gzip)
        .on("error", () => console.log("failed to compress file"))
        .pipe(writeableStream)
        .on("error", () => console.log("failed to write file"))
        .on("finish", () =>
            console.log(
                "A file with the *cats* images has been compressed successfully."
            )
        );

    // One more way to do it:

    pipeline(
        fs.createReadStream("api/dogs.txt"),
        zlib.createGzip(),
        fs.createWriteStream("dogs.text.gz"),
        (err) => {
            if (err) {
                console.error("Pipeline failed", err);
            } else {
                console.log(
                    "A file with the *dogs* images has been compressed successfully."
                );
            }
        }
    );
}

module.exports = compressPetsLinks;