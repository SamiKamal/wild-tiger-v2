var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
  category : String,
  food_name : String,
  food_desc: String,
  food_price : String
});

// module.exports = mongoose.model('contest', contestSchema);
module.exports = mongoose.model('Bar', barSchema, 'bar');
