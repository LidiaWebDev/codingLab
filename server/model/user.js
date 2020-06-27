const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt'); //for encryption
// const { schema } = require('./post');
 
// create a schema
var userSchema = new Schema({
  email: {type:String, require: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  date:{type:Date, default: Date.now}
});

// userSchema.statics.hashPassword = function hashPassword(password) {
//   return bcrypt.hashSync(password,10);
// }

// userSchema.methods.isValid = function (hashedPassword) {
//  return bcrypt.compareSync(hashedPassword, this.password)
// }
module.exports = User = mongoose.model('User', userSchema);