const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
app.use(express.json());
const mongoose=require("mongoose");


app.listen(3000)