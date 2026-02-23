const mongoose=require("mongoose");

const product_modal=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number},
    description:{type:String},
    categories:[{type:mongoose.Schema.Types.ObjectId,ref:"Category"}],
    images:{String},
},{timestamps:true});

module.exports=mongoose.model("Product",product_modal);