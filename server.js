const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    form {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    input[type="text"],
    input[type="password"] {
      width: calc(100% - 22px);
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    input[type="submit"] {
      background-color: #28a745;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background-color: #218838;
    }
  </style>
  <body>
    <form action="" method="get">
      Login: <input type="text" name="login" required /><br />
      Password: <input type="password" name="password" required /><br />
      <input type="submit" value="Submit" />
    </form>
    <script>
      document
        .querySelector("form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const login = this.login.value;
          const password = this.password.value;

          if (login === "admin" && password === "password") {
            alert("Login successful!");
          } else {
            alert("Invalid login or password.");
          }
        });
    </script>
  </body>
</html>
`)
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
