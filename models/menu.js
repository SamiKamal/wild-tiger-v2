var mongoose = require('mongoose');
var uri = 'mongodb+srv://Sami:sami123456@wt-cluster-xd7ou.mongodb.net/test?retryWrites=true'
mongoose.connect(uri, {dbName: 'wildtiger'});
mongoose.Promise = global.Promise;


var connection = mongoose.connection;


var menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    category: String,
    food_name: String,
    food_desc: String,
    food_price: String
});
var Menu = mongoose.model('Menu', menuSchema, 'menus');


connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    
    Menu.find(function(err, menus){
        if(err) return console.err(err);
        console.log(menus);
    })


    /*
    connection.db.collection("menu", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(JSON.stringify(data)) // it will print your collection data
        })
    });
*/
});
module.exports = Menu;
