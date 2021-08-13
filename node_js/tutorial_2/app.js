const http = require("http");
const files = require("./files");
const logger = require("./logger");

const hostname = "127.0.0.1";
const port = 3032;

const defaultHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to the pets page</title>
    <style>
      html {
        background-color: #9edaec;
      }
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    </style>
  </head>

  <body>
    <h1>Welcome to the pets page!!!</h1>
    <p>
      To get a picture of a random cat, simply insert /cats at the end of this URL. Have fun :)
    </p>
  </body>
</html>`;

const pageNotFound = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to the pets page</title>
    <style>
      html {
        background-color: orangered;
      }
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    </style>
  </head>

  <body>
    <h1>Page not found. Please try / or /cats or /dogs</h1>
  </body>
</html>`;

function htmlGenerator(link, pet) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Random ${pet}</title>
        <style>
          html {
            background-color: orangered;
          }
          h1 {
            text-align: center;
          }
           img{
               max-width: 70%;
               display: block;
               margin: 0 auto;
           }
           
        </style>
      </head>
    
      <body>
        <h1>Here is a picture of a ${pet} </h1>
        <img src="${link}" alt="">
      </body>
    </html>`;
}

const server = http.createServer((request, result) => {
  console.log({ url: request.url });
  if (request.url === "/") {
    result.writeHead(200, { "Content-Type": "text/html" });
    result.write(defaultHtml);
    result.end();
  } else if (request.url === "/cats") {
    result.writeHead(200, { "Content-Type": "text/html" });
    const link = files("cats");
    result.write(htmlGenerator(link, "cat"));
    logger(link, "cats");
    result.end();
  } else if (request.url === "/dogs") {
    result.writeHead(200, { "Content-Type": "text/html" });
    const link = files("dogs");
    result.write(htmlGenerator(link, "dog"));
    logger(link, "dogs");
    result.end();
  } else {
    result.writeHead(404, { "Content-Type": "text/html" });
    result.write(pageNotFound);
    result.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`pets server running at http://${hostname}:${port}`);
});
