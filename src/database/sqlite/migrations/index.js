const sqliteConnetion = require("../../sqlite")
const creatUsers = require("./createUsers")



async function migrationsRun () {



 const schemas = [


 creatUsers,


 ].join("")



 sqliteConnetion()
.then(db => db.exec(schemas))
.catch(error => console.error(error))





}


module.exports = migrationsRun