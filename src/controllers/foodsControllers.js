const sqliteConnetion = require("../database/sqlite")


class FoodsController {

 async create(request,response) {

  const { prato, ingrediente} = request.body


  return response.json({ prato, ingrediente})




 }





}


module.exports= FoodsController
