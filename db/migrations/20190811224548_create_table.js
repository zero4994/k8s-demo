exports.up = function(knex) {
  return knex.schema.createTable("visits", table => {
    table.increments("id");
    table.timestamps("created_at");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("visits");
};
