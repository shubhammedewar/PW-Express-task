const express= require('express')

const app = express()

const port = 4020;

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.get('/about',(req,res)=>{
    res.send('This is about page')
})

app.get('/contact',(req,res)=>{
    res.send(`This is contact page mail at :suppor#@pwskills.com`)
})

app.listen(port,()=>{
    console.log('server is running on :'+ port);
})