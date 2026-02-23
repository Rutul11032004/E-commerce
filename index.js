const express=require("express");
const connectDB=require("./db")
const app=express()

connectDB();
app.use(express.json())


app.use('/api/categories',require("./routers/category"));
app.use('/api/products',require("./routers/product"));

app.listen(3000,()=>{
    console.log("server is running on 3000 port")
})