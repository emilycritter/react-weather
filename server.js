const app = require('./index');
require('dotenv').config();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

module.exports = server;
