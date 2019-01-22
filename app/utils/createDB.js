let knex = require(`knex`)({
  client: `pg`,
  connection: {
    host : `127.0.0.1`,
    user : `ericgroh`,
    password : `Bearcats5`,
    database : `hockey_shot`
  }
});

//Users table
knex.schema.hasTable(`users`).then(function(exists) {
  if (!exists) {
    return knex.schema.createTable(`users`, function(t) {
      t.increments(`id`).primary();
      t.string(`first_name`, 100);
      t.string(`last_name`, 100);
      t.string(`email`).unique().comment(`This is the email field`);
      t.string(`password`, 100);
    });
  }
});
