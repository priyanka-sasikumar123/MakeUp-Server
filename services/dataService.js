


const db=require('./db')

//get all products from db

const getproducts=()=>{
  return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else{
           return{
            status:false,
            statusCode:404,
            message:"No products found"
           }
        }
    }
  )
}
//to add wishlist to db
const addtowishlist=(id,name,price,image_link, product_type)=>
{
  //data added to mongodb --create a model in db.js
    return db.Wishlist.findOne({id}).then(
      (result)=>
      {
        if(result)
        {
         return{
          status:true,
          statusCode:200,
          message:'Product already exists'
         }
        }
        else
        {
          const newProduct = new db.Wishlist({id,name,price,image_link,product_type})
          newProduct.save();
          return{
            status:true,
            statusCode:200,
            message:'Product added to wishlist'
          }
        }
      }
      
        

    )

}

//to get wishlist data

const getwishlist=()=>{
  return db.Wishlist.find().then(
    (result)=>{
      if(result){
        return{
          status:true,
          statusCode:200,
          products:result
        }
      }
      else
      {
        return{
            status:false,
            statusCode:404,
            message:"Your Wishlist is empty"
        }
      }
    }
  )
}

//to delete from wishlist

deletewish=(id)=>
{
  return db.Wishlist.deleteOne({id}).then(
    (result)=>{
      if(result){
        // return{
        //   status:true,
        //   statusCode:200,
        //   message:"Product deleted"
        // }
        return db.Wishlist.find().then(
          (result)=>{
            if(result){
              return{
                status:true,
                statusCode:200,
                wishlist:result,
                message:"Product Removed to Cart"
              }
            }
            else
            {
              return{
                  status:false,
                  statusCode:404,
                  message:"Product not Found"
              }
            }
          }
        )
      }
      else
      {
        return{
            status:false,
            statusCode:404,
            message:"Product Not Found"
        }
      }
    }
  ) 
}

//to add cart to db
const addtocart=(id,name,price,image_link, product_type)=>
{
  //data added to mongodb --create a model in db.js
    return db.Cart.findOne({id}).then(
      (result)=>
      {
        if(result)
        {
         return{
          status:true,
          statusCode:200,
          message:'Product already exists'
         }
        }
        else
        {
          const newProduct = new db.Cart({id,name,price,image_link,product_type})
          newProduct.save();
          return{
            status:true,
            statusCode:200,
            message:'Product added to Cart'
          }
        }
      }
    )
}

//to get cart data

const getcart=()=>{
  return db.Cart.find().then(
    (result)=>{
      if(result){
        return{
          status:true,
          statusCode:200,
          products:result
        }
      }
      else
      {
        return{
            status:false,
            statusCode:404,
            message:"Your Cart is empty"
        }
      }
    }
  )
}

const deletecart=(id)=>
{
  return db.Cart.deleteOne({id}).then
  (
    (result)=>
    {
      if(result)
      {
        // return{
        //    status:true,
        //    statusCode:200,
        //    message:"Product deleted"
        // }
        return db.Cart.find().then
        (
          (result)=>
          {
            if(result){
              return{
                status:true,
                statusCode:200,
                cart:result,
                message:"Product Removed "
              }
            }
            else
            {
              return{
                  status:false,
                  statusCode:404,
                  message:"Product not Found"
              }
            }
          }
        
        )
      }
      else
      {
        return{
          status:false,
          statusCode:404,
          message:"Product not Found"
        }
      }
    }
  )
}

const register=(firstname,lastname,email,password)=>{

  return db.User.findOne({email})//data
     .then(user=>{
       if(user){
         return{
           status:'false',
           statusCode:400,
           message:'User already registered'
         }
         }
       else
       {
        const newUser=new db.User({
           firstname,
           lastname,
           email,
           password,
          })
         newUser.save();
          return {
         status:'true',
         statusCode:200,
         message:'Register Sucessfully'
       }
     }
    }) 
   }

 //to login
 
 const login=(email,pswd)=>
 {
  return db.User.findOne({email,pswd})
  .then(user=>{
    if(user){
      currentuser=user.firstname;
     
        return{
          status:'true',
          statusCode:200,
          message:'Login Successful',
          currentuser:currentuser,
          
        }
    }
   
    else{
      return{
        status:'false',
        statusCode:400,
        message:'Password Incorrect'
      }
    }
  })
}
   

module.exports ={
    getproducts,
    addtowishlist,
    getwishlist,
    deletewish,
    addtocart,
    getcart,
    deletecart,
    register,
    login
}