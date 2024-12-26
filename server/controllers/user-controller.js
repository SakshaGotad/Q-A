const User = require('../models/User-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//user registration logic
const  register = async(req, res)=>{

    const{ name,email,password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(userExist){
            const error = new Error("user exist");
            throw error;
            // res.status(400).json({message:"user already exists"});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser =  await User({name , email , password:hashPassword});
        await newUser.save();

        res.status(200).json({message:"user registered successfully"})
        
    } catch (error) {
        console.error(error); 
    res.status(500).json({ message: "Server error, please try again later" });
        
    }
}





//user login logic
const login =async(req, res)=>{
    
    const{email , password} = req.body;
    try {
        
        const findUser = await User.findOne({email});
        if(!findUser){
            res.status(400).json({message:"user not exist"});
        } 

        const isPassmatch = await bcrypt.compare(password , findUser.password)

        if(!isPassmatch){
            const error = new Error('invalid credentials')
            statusCode = 400
            throw error;
        }
        
        const accessToken = jwt.sign({email:email , userId:findUser._id,}, process.env.SECRET_KEY,{expiresIn:"1h"});
        
        res.status(200).json({message:'logged in successfully', status:true, token:accessToken});

    } catch (error) {
        console.error(error); 
    }

};


const user =async (req, res)=>{
    try {
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({userData})
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {register,login, user};