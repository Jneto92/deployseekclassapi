
exports.up = function(knex) {
  knex.schema.table('notificacoes', function(table){
    table.boolean('postar').defaultTo(false)
  })
};

exports.down = function(knex) {
  knex.schema.table('notificacoes', function(table){
      table.dropColumn('postar')
  })
};
