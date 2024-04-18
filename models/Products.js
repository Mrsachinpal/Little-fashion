const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    Pname:{
        type:String,
        trim:true,
        require:true
    },
    Pimg:{
        type:String,
        trim:true,
        require:true
    },
    Pprice:{
        type:Number,
        trim:true,
        min:0,
        require:true
    },
    Pshortdesc:{
        type:String,
        maxlength: 50,
        trim:true,
        require:true
    },
    Pmaindesc:{
        type:String,
        trim:true,
        require:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

let Product=mongoose.model('Product',productSchema);
module.exports=Product