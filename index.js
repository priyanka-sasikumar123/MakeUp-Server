const express = require('express')

const cors=require('cors')

const dataService=require('./services/dataService')

const app=express()


//to parse the json data from db
app.use(express.json())

app.listen(3000,()=>{
    console.log("listening on port 3000");
})
app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all products - request to get all products

app.get('/all-products',(req,res)=>{
    dataService.getproducts().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//api to add(post) wishlist items

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.name,req.body.price,req.body.image_link,req.body.product_type).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//to get wishlist items

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to delete item from wishlist

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//request for add to cart 
app.post('/addtocart',(req,res)=>{
    dataService.addtocart(req.body.id,req.body.name,req.body.price,req.body.image_link,req.body.product_type).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//to get cart items

app.get('/getcart',(req,res)=>{
    dataService.getcart().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to delete cart item
app.delete('/deletecart/:id',(req,res)=>{
    dataService.deletecart(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to register

app.post('/register',(req,res)=>{
    dataService.register(req.body.firstname,req.body.lastname,req.body.email,req.body.password).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//to login

app.post('/login',(req,res)=>{
    console.log(req.body);
    const result=dataService.login(req.body.email,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result);
    }) 
})

    
