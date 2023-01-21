//1.import mongoose

const mongoose = require('mongoose')

//2.define connection string
                //connection string
mongoose.connect('mongodb://localhost:27017/makeup',()=>{
    console.log('Connected to mongodb');
})

//model creation

const Product=mongoose.model('Products',{
    id:Number,
    name:String,
    brand:String,
    price:Number,
    image_link:String,
    product_type:String   
})

const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    name:String,
    price:Number,
    image_link:String,
    product_type:String 
})

const Cart=mongoose.model('Cart',{
    id:Number,
    name:String,
    price:Number,
    image_link:String,
    product_type:String 
})

const User=mongoose.model('Users',{
    
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

module.exports={
    Product,
    Wishlist,
    Cart,
    User
}