exports.up = function (knex) {
  return knex.schema
    .createTable("audience", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("status").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("tags", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("audience_tags", function (table) {
      table.integer("audience_id").unsigned().notNullable();
      table.integer("tag_id").unsigned().notNullable();
      table
        .foreign("audience_id")
        .references("id")
        .inTable("audience")
        .onDelete("CASCADE");
      table
        .foreign("tag_id")
        .references("id")
        .inTable("tags")
        .onDelete("CASCADE");
      table.primary(["audience_id", "tag_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("audience_tags")
    .dropTableIfExists("tags")
    .dropTableIfExists("audience");
};
