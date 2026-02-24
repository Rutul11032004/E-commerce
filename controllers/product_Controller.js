const Product=require("../models/product_modal")

exports.createProduct=async(req,res)=>{
    try{
     const{title,price,description,categories,image}=req.body    
        const product = await Product.create({
        title,
        price,
        description,
        categories,
        image
    });
    res.status(201).json(product);
    }
    catch(err){
    console.log("Error creating product:", err.message);
    res.status(500).json({error:err.message});
}
}
// exports.getallProducts=async(req,res)=>{
//     try{
        
//     }
// }
exports.getProducts=async(req,res)=>{
    try{
        const products=await Product.find().populate('categories','name');
        res.status(200).json(products);
    }
    catch(error){
        console.error("error fetching products:",error.message);
        res.status(500).json({message:'server error',error:error.message})
    }
}

exports.getProductsById=async(req,res)=>{
    try{
        const{id}=req.params;
        const product=await Product.findById(id).populate('categories','name');
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    }
    catch(err){
    res.status(500).json({message:"server error ",error:err.message})
    }
}


exports.deleteProductByID=async(req,res)=>{
    try{
        const{id}=req.params
        const productDel=await Product.findByIdAndDelete(id);
        if(!productDel){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(productDel,": Product Id is deleted succefully");
    }
    catch(err){
        res.status(500).json({message:"server Error while deleting",error:err.message})
    }
}