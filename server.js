const express= require('express');
const app = express();
const mongoose= require('mongoose')

const blogRouter= require("./route/blog")

require('dotenv').config();

app.use(express.json());
app.use(blogRouter)


app.get("/",(req,res)=>{
    res.json({
        mgs:"this is home page"
    })
})

app.get("*",(req,res)=>{
    res.json({
        mgs: "Route wrong"
    })
})

mongoose.connect('mongodb://localhost:27017/raju').then(()=> console.log('Database connected'))
.catch((err)=> console.log(err))


const port = process.env.PORT;

app.listen(port,()=>console.log(`server is running at PORT ${port}`));



