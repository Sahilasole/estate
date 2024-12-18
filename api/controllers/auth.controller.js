import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'


export const signup = async (req, res )=>{

    const { username,email,password }= req.body;
    
    if (!username || !email || !password || username === ''|| email === '' || password === ''){
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    const hashedPassword = bcryptjs.hashSync(password,10 );
    
    const newUser = new User({username,email,password:hashedPassword});
    try{
    await newUser.save()
    res.status(201).json("Signup successful");

    }catch (error){
        res.status(400).json({ message: 'Signup failed' } );
        }
};