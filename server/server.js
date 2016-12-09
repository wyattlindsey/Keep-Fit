var express = require('express');
var helper = require('./helper.js');

var app = express();

var catList = mongoose.model('catList',catSchema);

require('./routes.js')(app, express);
// start listening to requests on port 800
app.listen(8000,(err) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Server listening on', 8000);
}
});
// export our app for testing and flexibility, required by index.js
module.exports.app = app;
module.exports.catList = catList;