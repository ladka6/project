const mongoose =require('mongoose');
const ids=mongoose.Schema({
ID:{
    type:Number,
    required:true
},
MAIL:{
    TYPE:String,
    required:true

},
NAME:{
    type:String,
    required:true

},
PASSWORD:{
   type: String,
   required:true

},
POST:{

}

}

);

module.exports=mongoose.model('insert-data',ids);