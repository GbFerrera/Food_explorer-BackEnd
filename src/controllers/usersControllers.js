const AppError = require("../utils/AppError");
const sqliteConnetion = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnetion();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    await database.run(
      `
    INSERT INTO users (name,email,password) VALUES(?,?,?)`,
      [name, email, password]
    );

    return response.json("Criado com sucesso");
  }

  async update(request, response) {
    const { name, password, new_password, email } = request.body;
    const user_id = request.user.id

    const database = await sqliteConnetion();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (!password && new_password) {
      throw new AppError(
        "Você informar a senha antiga para definir a nova senha"
      );
    }

    if (password !== user.password) {
      throw new AppError("A senha antiga não confere.");
    }

    user.password = new_password;

    await database.run(
      `
   UPDATE users SET
   name = ?,
   email = ?,
   password = ?,
   updated_at = DATETIME('now')
   WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    );
    return response.json("Atualizado com sucesso");
  }
}

module.exports = UsersController;
