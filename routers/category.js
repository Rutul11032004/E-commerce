const express=require("express")
const router=express.Router();
const categoriesController=require("../controllers/category_Controller")

//category Routes
router.post("/",categoriesController.createCategory);
router.get("/tree",categoriesController.getCategoryTree);    

module.exports=router;

