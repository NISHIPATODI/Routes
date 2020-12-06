exports.up = function(knex) {
    return knex.schema.createTable("Needs",function(table){
        table.uuid("patientId").references("id").inTable("user").onDelete("CASCADE");
        table.uuid("requirementId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.text("description"); 
        table.string("category");
        table.string("city");
        table.string("image").defaultTo("https://www.securityindustry.org/wp-content/uploads/sites/3/2018/05/noimage.png");
        table.string("document");
        table.string("contact_no");
        table.integer("amount");
        table.timestamps(false, true);

    }).createTable("donator",function(table){
        table.uuid("donatorId").references("id").inTable("user").onDelete("CASCADE");
        table.uuid("requirementId").references("requirementId").inTable("patient").onDelete("CASCADE");
        table.integer('amount');

        table.timestamps(false,true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("post");
};
