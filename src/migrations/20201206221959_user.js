
exports.up = function(knex) {
    return knex.schema.createTable("user",function(table){
        table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.string("fullName");
        table.string("accHash").unique();
        table.string("email").notNullable().unique();
           table.timestamps(false, true);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user");
};
