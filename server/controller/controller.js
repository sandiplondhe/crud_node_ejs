var Userdb=require('../model/model');

//create and save new user
exports.create=(req,res)=>{
 //validating inputs
 if(!req.body){
    return res.status(400).send({message:"cannot be empty"})
 } 
 //new category
 const category=new Userdb({
    category:req.body.category
 })
 //save category in database
 category.save(category)
 .then(data=>
   //res.send(data)
   res.redirect("/add-category")
   )
 .catch(err=>res.status(500).send({message:err.message||"Some error occured during create operation"}))
}

//retrieve and return all users and return a single user 
exports.find=(req,res)=>{
   if(req.query.id){
      const id=req.query.id;
      Userdb.findById(id)
      .then(data=>{
         if(!data){
            res.status(404).send({message:"No user found for id"+id})
         }else{
            res.send(data)
         }
      })
      .catch(err=>{
         res.status(500).send({message:"Error retrieving user with id"+id})
      })
   }
   else{
      Userdb.find()
      .then(user=>{
         res.send(user);
      })
      .catch(err=>{
         res.status(500).send({message:err.message||"Error occured while processing"})
      })
   }
  
}

//update a new identified user by user id 
exports.update=(req,res)=>{
   if(!req.body){
      return res.status(400).send({message:"Data to be update cannot be empty"})
   }
   const id=req.params.id;
   Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then(data=>{
      if(!data){
         res.status(404).send({message:`cannot update user with ${id}. maybe user not found`})
      }else{
         res.send(data);
      }x
   })
   .catch(err =>{
      res.status(500).send({ message : "Error Update user information"})
  })
}
//delete by user id
exports.delete=(req,res)=>{
   const id=req.params.id;
   Userdb.findByIdAndDelete(id)
   .then(data=>{
      if(!data){
         res.status(404).send({message:`Cannot delete with id ${id}`})
      }else{
         res.send({message:"Category deleted succesfully"})
      }
   })
   .catch(err=>{
      res.status(500).send({message:"Could not delete user with id "+ id});
   })   
}