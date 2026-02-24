const express=require("express")
const router=express.Router()
const categoriesController=require("../controllers/category_Controller")
const productController=require("../controllers/product_Controller")

//product Routes
router.post("/",productController.createProduct);   
router.get("/:id",productController.getProductsById);
router.get("/",productController.getProducts)
router.delete("/products/:id",productController.deleteProductByID);

module.exports=router