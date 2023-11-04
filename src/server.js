const express = require("express");
const app = express();

const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations")

const PORT = 7777;

app.listen(PORT, () => console.log(`Porta ${PORT}`));

app.use(express.json())

app.use(routes);

migrationsRun()


