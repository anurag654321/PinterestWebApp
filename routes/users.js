const mongoose= require('mongoose')
const plm=require('passport-local-mongoose');
mongoose.connect("mongodb+srv://2k22it32861:oVim89IJg7vrhirJ@pinterestwebapp.ww3j2va.mongodb.net/")


const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number,
  boards:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
});


userSchema.plugin(plm);
module.exports=mongoose.model("user",userSchema);