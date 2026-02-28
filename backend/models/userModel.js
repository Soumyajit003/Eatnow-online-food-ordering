import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false});  //{minimize:false}) -> this ensure that if the cart is empty then mongo will not remove the empty object,and save as it is in the database

const userModel = mongoose.model.user || mongoose.model('user',userSchema);

export default userModel;