const mongoose=require("mongoose")

const categoryModal=new mongoose.Schema({
    name:{type:String,required:true},
   parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null   // ✅ root categories have no parent
  },
    ancestors:[{type:mongoose.Schema.Types.ObjectId,ref:'Category'}]
},{timestamps:true});

module.exports=mongoose.model('Category',categoryModal)