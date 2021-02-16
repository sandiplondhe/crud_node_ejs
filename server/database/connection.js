const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        //mongosb connection string
        const con=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`Mongodb connected ${con.connection.host}`)
    }catch(error){
        console.log(err)
        process.exit();
    }
}
module.exports=connectDB; 
