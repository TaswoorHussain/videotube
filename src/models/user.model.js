import moongoose , {Schema}  from 'mongoose';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema=moongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    } ,
    fullName:{
        type: String,
        required: true,
        trim: true, 
        index: true
    } ,
    avatar:{
        type:String , //cloudunary url
        required:true,

    },
    coverImage:{
        type:String
     } ,

    watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

},{timestamps});

userSchema.pre("save" ,async function (next){
    if(!isModified("password")) return next();

    this.password=bcrypt.hash(this.password , 10);
    next();
})

userSchema.methods.isPasswordCorrect =async function(password){
   return await bcrypt.compare(password , this.password);
}

userSchema.methods.generateAccessToken=function(){
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName,
        } ,
        prosess.env.ACCESS_TOKEN_SECRET ,
        {
            expiresIn:ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this.id,
    } ,
    process.env.REFRESH_TOKEN_SECRET ,
    {
       expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}


export const User=moongoose.model("User", userSchema)











// userSchema.pre("save" , async function (){
//   if(!isModified(password))  return  next()
//     this.password=encrypt.hash(this.password ,10);
//     next();
// })



// userSchema.methods.isPasswordCorrect= async function(password){
//     return await bcrypt.compare(password, this.password)
// }