const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    

})
 

const Game = mongoose.model("User",userSchema);
module.exports=User;
