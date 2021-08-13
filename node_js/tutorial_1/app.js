const http = require("http");

const greeting = {
  student: " <p>Welcome :) Your account has a role: student </p>",
  teacher: " <p>Welcome :) Your account has a role: teacher  </p> ",
  anonymous:
    "<p>Welcome to the Home Page, anonymous stranger! Your role has not been defined yet. </p> ",
};

const hostname = "127.0.0.1";
const port = 3000;

/////////////////////////////// Plain text///////////////////////////////////

/* 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello there!");
  res.end();
});
*/

/////////////////////////////// JSON + 503 error ///////////////////////////////////

// const server = http.createServer((req, res) => {
//   if (req.url == "/passphrase") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(
//       JSON.stringify({
//         message: "Hello there, your secure passphrase is correct!",
//       })
//     );
//     res.end();
//   } else {
//     res.writeHead(503, { "Content-Type": "application/json" });
//     res.write(JSON.stringify({ error: "The passphrase is not valid!" }));
//     res.end();
//   }
// });

/////////////////////////////// HTML + 404 error ///////////////////////////////////

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(greetingPage(greeting.anonymous));
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(greetingPage(greeting.student));
    res.end();
  } else if (req.url == "/teacher") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(greetingPage(greeting.teacher));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(pageNotFound());
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server  at http://${hostname}:${port}/`);
});

function pageNotFound() {
  return `
    <html lang="en">
    <head>
      <title>404 Page not found</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
      .error {
        padding: 5vw;
        background-color: orangered;
        border: 1px solid black;
        margin: 0 auto;
        font-size: 2rem;
        text-align:center;
      }
      </style>
    </head>
    <body>
      <div class="error">
          Page was not found :( Please double-check your role!
      </div>
    </body>
  </html>
  `;
}

function greetingPage(msg) {
  return `<html lang="en">
  <head>
    <title>Hi there!!!</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
    .greeting {
        padding: 5vw;
        background-color: dodgerblue;
        border: 1px solid black;
        margin: 0 auto;
        font-size: 2rem;
        text-align:center;
      }
      </style>
  </head>
  <body>
    <div class="greeting">
      ${msg}
    </div>
  </body>
</html>
`;
}
