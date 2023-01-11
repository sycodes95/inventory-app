const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const GunsSchema = new Schema({
  name: {type: String, required: true, maxlength: 50},
  price: {type: Number, required: true, min:0, max: 1000000},
  weight: {type: Number, min:0, max:100},
  category: {type: String, required: true},
  picture: {type: String, required: true},
  stock: {type: Number, required: true, min:0, max: 1000000}
})

GunsSchema.virtual('url').get(function (){
  return `/catalog/${this._id}`;
})

module.exports = mongoose.model('Guns', GunsSchema)