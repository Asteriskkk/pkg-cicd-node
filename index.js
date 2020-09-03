const express = require('express')
const app = express()




app.get('/home',(req, res)=>{
    res.status(200).send('<h1>Home Page</h1>')
})

app.listen("3000",function(){
    console.log('app running at port 3000 with build new' )
})
