const { user } = require("./functions.js");

let response = user.newUser(
  27,
  "Cris Barros",
  "cbarros14@gmail.com",
  "123456",
  "admin"
);
console.log(response);

response = user.updateData(
  42,
  "Thiago oliveira Bastos",
  "thiagobast@gmail.com",
  "888888",
  "student"
);
console.log(response);

response = user.login("thiagobast@gmail.com", "888888");
if (response) console.log("Login realizado com sucesso");
else console.log("Ops, Erro ao realizar o login!");

response = user.logout(response)
if (response) console.log("Logout realizado com sucesso!");