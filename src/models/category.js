const mongoose=require('mongoose')

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        unique:true
    },
    parentId:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('Category',courseSchema)