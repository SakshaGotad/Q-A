const Answer = require('../models/Answer-model');


// ANSWER QUERY
const AnsQuery=async(req,res)=>{

    try {
        const answer = new Answer(req.body);
        const  result = await answer.save();
        res.send(result);
        
    } catch (error) {
        res.send(error);
    }
}

// FETCH ALL ANSWERS OF PARTICULAR QUERY :id
const fetchAnswers = async(req,res)=>{
    try {
        const answers = await Answer.find({queryId:req.params.id});
        if(answers){
            res.send(answers)
        }else{
            res.send({result:"not found"});
        }
    } catch (error) {
        console.log(error);
    }
}

//EDIT ANSWER
 const editAns = async(req, res)=>{
    try {
        const updateAns = await Answer.updateOne({_id:req.params.id},
           { $set : req.body}
        )
        res.send(updateAns)
    } catch (error) {
        res.send(error);
    }
 }


 //DELETE ANSWER
 const deletAns =async(req,res)=>{
    try {
        const answer = await Answer.findById({_id:req.params.id});

        if(!answer){
            res.send("not found");
        }
        const deleted = await Answer.findByIdAndDelete({_id:req.params.id});
        res.json({msg:"deleted",query: deleted});
    } catch (error) {
        res.send(error)
    }
 }


 const delteAllAnswers = async(req,res)=>{
    try {
        let answer = await Answer.findById({queryId : req.params.id});
        if(!answer){
            res.send("not found");
        }
        answer = await Answer.deleteMany({queryId: req.params.id});
        res.json({msg:"deleted all the answers", query:answer});
    } catch (error) {
        res.send(error);
    }
 }
module.exports = {AnsQuery,fetchAnswers,editAns,deletAns,delteAllAnswers};