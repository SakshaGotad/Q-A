const  Polls = require('../models/Polls-model');

//create query logic
const CreateQuery =async(req, res)=>{
    
    try {
        const query = await Polls(req.body);
        const result = await query.save();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

// fetch query based on queryId--> :id
const FetchIdQuery = async(req, res)=>{
    
    try {
      const query = await Polls.findById({_id:req.params.id});
      res.send(query)
    } catch (error) {
        res.send(error);
    }
}

//fetch all queries in a database
const FetchAllinDB = async(req,res)=>{
    try {
        const query = await Polls.find({});
        res.send(query);
    } catch (error) {
        res.send(error)
    }
}


//delete query based on queryId---> :id
const DeleteQuery =async(req,res)=>{
    try {
        const query = await Polls.findById({_id:req.params.id});
        if(!query){
            return res.send(404).send("Not Found")
        }
       const deletedQuery  = await Polls.findByIdAndDelete(req.params.id);
        res.json({message:"Deleted", query: deletedQuery});
    } catch (error) {
        console.log(error);
        res.send("Something Went Wrong");
    }
    }


//update query based on queryID---> :id
const UpdateQuery = async(req ,res)=>{
    
    try {
        const updatequery = await Polls.updateOne( { _id: req.params.id },
            {
              $set: req.body
            })
         res.send(updatequery);   
        
    } catch (error) {
        console.log(error);
        res.send('cannot update');
    }
}    

// Fetch all query posted by particular User.
const UserQuery =async(req,res)=>{
    
    try {
        const userQuery = await Polls.find(req.body);
        if(userQuery){
            res.send(userQuery);
        }
    } catch (error) {
        console.log(error)
        res.send("no query created by user");
    }
}

module.exports= {CreateQuery,FetchIdQuery,FetchAllinDB,DeleteQuery,UpdateQuery,UserQuery};