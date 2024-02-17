const express= require('express')

const app = express();

const port=4020

app.get('/random',(req,res)=>{
    let number = Math.floor(Math.random()*100 );
    res.send(`generated random number:${number.toString()} `)
})

app.listen(port , ()=>{
    console.log('Server is running on port:'+ port);
})