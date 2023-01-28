require("dotenv").config()
const express = require("express")
const sequelize = require("./db/conn")
const Post = require("./model/Post")
const app = express()

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:true}))

app.get("/" , async(req,res)=>{
    const posts = await Post.findAll({})
    res.render("index" , {posts})
})

app.get("/posts/new" , async(req,res)=>{
    res.render('new')
})

app.post("/posts" , async(req,res)=>{

    await Post.create(req.body)

    res.redirect("/")
})

sequelize.sync()

console.log(process.env.PORT);

app.listen( 3000||process.env.PORT , ()=>{

    console.log("Server Start");
})
