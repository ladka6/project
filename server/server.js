const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
app.use(express.json());
const mongoose=require("mongoose");

const users=[]
mongoose.connect

app.get('users',(req,res)=> {
    res.json(users)
})

app.post('users', async (req,res)=> {
    try{
        const salt=await bcrypt.genSalt();
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        console.log(salt)
        console.log(hashedPassword)
    
   const user=new UserSchema(
   {name: res.body.name,password: hashedPassword})
   user.save();
   users.push(user)
  
   res.status(201).send()
   bcrypt.hash(salt + 'password')
 } catch{
    res.status(500).send()  
}
})

app.listen(3000)