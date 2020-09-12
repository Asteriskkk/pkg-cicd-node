const express = require('express')
const app = express()
process.title = process.argv[2];
console.log('process title',process.title)
app.get('/new',(req, res)=>{
    res.status(200).send('<h1>New Page</h1>')
})

app.get('/test',(req, res)=>{
    res.status(200).send('<h1>test Page</h1>')
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
