const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    title:{type:String ,required:true},
    query:{type:String ,required:true},
    tags:{type:String ,required:true},
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    userId:{type:String ,required:true},
    date:{type:Date, default: Date.now()},

    
})


const Polls = mongoose.model('QueryPoll',PollSchema);

module.exports = Polls;