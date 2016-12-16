const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

const config = function() {
  db.on('error', (err) => { console.error(`Database error: ${err}`); });
  db.once('open', () => { console.log('Mongo is open for business'); });
}

module.exports = config();