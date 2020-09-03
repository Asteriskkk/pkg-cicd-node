const express = require('express')
const app = express()
process.title = process.argv[2];
app.get('/new',(req, res)=>{
    res.status(200).send('<h1>New Page</h1>')
})

app.get('/id',(req, res)=>{
    res.status(200).send('<h1>Id Page</h1>')
})

app.get('/list',(req, res)=>{
    res.status(200).send('<h1>List Page</h1>')
})

app.get('/home',(req, res)=>{
    res.status(200).send('<h1>Home Page</h1>')
})

app.listen("3000",function(){
    console.log('app running at port 3000 with build new' )
})
