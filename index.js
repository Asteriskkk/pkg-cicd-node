const express = require('express')
const app = express()




app.get('/home',(req, res)=>{
    res.send('<h1>Home Page</h1>')
})

app.listen("8080",function(){
    console.log('app running at port 8080')
})