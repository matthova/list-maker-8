try {
  require("dotenv").config();
} catch (ex) {
  // Add error handling here, if you want
}
module.exports = require("sails-db-migrate").gruntTasks;
