const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    subTitle:{
        type:String,
        required:true
    },
    
    reviewsAvg:{
        type:Number,
        required:false
    },
    reviewsCount:{
        type:Number,
        required:false
    },
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    androidLink:{
            type:String,
            required:true

    },
    gradientColors: {
        type: [String] 
      },
    iosLink:{
        type:String,
        required:true
    }


})
 

const Game = mongoose.model("Game",gameSchema);
module.exports=Game;
