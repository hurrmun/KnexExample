exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.string("task_name").notNullable();
    table.timestamps(true, true); // 1st arg = created at, 2nd arg = updated at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
