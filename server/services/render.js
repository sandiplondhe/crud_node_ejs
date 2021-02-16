const axios=require('axios');

exports.homeRoutes=(req,res)=>{
    //api category
    axios.get('http://localhost:5000/api/users')
    .then(function(response){
        res.render(`index`,{category:response.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_user=(req,res)=>{
    res.render(`add_user`)
}
exports.update=(req,res)=>{                     
    axios.get('http://localhost:5000/api/users',{params:{id:req.query.id}})
    .then(function(singleData){
        console.log(singleData.data)
        res.render(`update`,{singleData:singleData.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

