const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    queryId:{type:String ,required:true},
    answer:{type:String ,required:true},
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    userId:{type:String ,required:true},
    Date:{type:Date ,default:Date.now()},

})

const Answer = mongoose.model("Answer",AnswerSchema);

module.exports= Answer;