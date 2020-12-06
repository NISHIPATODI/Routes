exports.up = function(knex) {
    return knex.schema.createTable("patient",function(table){
        table.uuid("patientId").references("id").inTable("user").onDelete("CASCADE");
        table.uuid("requirementId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.text("description"); 
        table.string("category");
        table.string("city");
        table.string("image");
        table.string("document");
        table.string("contact_no");
        table.string("amount");
        table.timestamps(false, true);

    }).createTable("donator",function(table){
        table.uuid("donatorId").references("id").inTable("user").onDelete("CASCADE");
        table.uuid("requirementId").references("requirementId").inTable("patient").onDelete("CASCADE");
        table.string('amount');

        table.timestamps(false,true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("post");
};
