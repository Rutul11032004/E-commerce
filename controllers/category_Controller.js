const Category=require("../models/category_modal")

exports.createCategory=async(req,res)=>{
    try{
        const{name,parent_id}=req.body;
        let ancestors=[];
        let parent=null
    
    if(parent_id){
        parent=await Category.findById(parent_id);
        if(!parent){
            return res.status(400).json({message:"parent category not found"})
        }
        ancestors=[...parent.ancestors,parent._id]
    }
    const category=await Category.create({
        name,
        parent,
        ancestors
    })
    res.status(201).json(category)
    }
    catch(err){
        console.log("Error creating category:", err.message);
        res.status(500).json({error:err.message});
    }
};


exports.getCategoryTree=async(req,res)=>{
    try{
        const categories=await Category.find();
        const map={}
        categories.forEach((cat)=>(map[cat.id]={...cat._doc,children:[]}))
        const tree=[];

        categories.forEach((cat)=>{
        if(cat.parent){
            map[cat.parent].children.push(map[cat.id]);
        }
        else{
            tree.push(map[cat.id]);
        }
        })
        res.json(tree)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}