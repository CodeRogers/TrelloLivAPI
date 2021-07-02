const app = require("./app");

console.log("Servidor iniciado");

app.listen(process.env.PORT || 3333);