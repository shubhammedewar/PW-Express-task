const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to Men & Women Dummy Data')
    }else if(req.url == '/about'){
        res.end('this is about page')
    }
    else if( (req.url == '/men')){
        const options ={
            hostname:'fakestoreapi.com',
            path:"/products/category/men's%20clothing",
            method:'GET'
        }
        const apiReq = http.request(options,(apiRes)=>{
            apiRes.on('data',(data)=>{
                res.statusCode = 300;
                res.setHeader('content-type','application/Json');
                res.end(data.toString());
            })
        })
        apiReq.on("error",( e)=>{
            console.log(e);
        });
        apiReq.end();
    }
    
    else if( (req.url == '/women')){
        const options ={
            hostname:'fakestoreapi.com',
            path:"/products/category/women's%20clothing",
            method:'GET'
        }
        const apiReq = http.request(options,(apiRes)=>{
            apiRes.on('data',(data)=>{
                res.statusCode = 300;
                res.setHeader('content-type','application/Json');
                res.end(data.toString());
            })
        })
        apiReq.on("error",( e)=>{
            console.log(e);
        });
        apiReq.end();
    }else{
        res.statusCode = 500;
        res.setHeader('content-type','text/plain');
        res.end('page not found')
    }
    
})
server.listen(4020);
console.log('http server is running:');