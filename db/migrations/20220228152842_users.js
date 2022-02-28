exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true); // 1st arg = created at, 2nd arg = updated at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
