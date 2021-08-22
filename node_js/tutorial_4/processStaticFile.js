const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { CONTENT_TYPES } = require("./config");

function processStaticFile(req, res) {
    //The fsPromises.stat() method is used to return information about the given file or directory. The Promise is resolved with the fs.Stats object for the given path.
    fsPromises
        .stat(path.join(__dirname, req.url))
        .then((data) => {
            // Returns true if the <fs.Stats> object describes a regular file.
            if (data.isFile()) {
                // The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.
                const ext = path.extname(req.url);
                res.writeHead(200, { "Content-Type": CONTENT_TYPES[ext] });
                // This line opens the file as a readable stream
                // Pipe - pipes the read stream to the response object (which goes to the client)
                fs.createReadStream(path.join(__dirname, req.url)).pipe(res);
            } else {
                res.writeHead(200, { "Content-Type": CONTENT_TYPES[".json"] });
                res.end(
                    JSON.stringify({
                        status: 200,
                        data: "Directory",
                    })
                );
            }
        })
        .catch((err) => {
            console.log(err);
            res.writeHead(404, { "Content-Type": CONTENT_TYPES[".json"] });
            res.end(
                JSON.stringify({
                    status: 404,
                    error: err.code,
                })
            );
        });
}

module.exports = processStaticFile;