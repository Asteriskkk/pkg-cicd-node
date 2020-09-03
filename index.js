const express = require('express')
const app = express()


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
