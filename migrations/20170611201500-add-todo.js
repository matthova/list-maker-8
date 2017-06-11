var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
  async.series([
    function (cb) {
      db.createTable('todo', {
        id: { type: 'string', primaryKey: true },
        description: 'string',
        createdAt: 'datetime',
        updatedAt: 'timestamp',
      }, cb);
    },
  ], callback);
};

exports.down = function(db, callback) {
  async.series([
    function (cb) {
      db.dropTable('todo', cb);
    },
  ], callback);
};
