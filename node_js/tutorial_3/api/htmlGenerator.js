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

module.exports = htmlGenerator;