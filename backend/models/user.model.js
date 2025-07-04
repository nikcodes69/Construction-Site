import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: [true,"Name is required"]
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true,"Email is required"],
    },
    password:{
        type: String,
        required: [true,"Password is required"],
        minlength: [6,"Password must be at least 6 characters long"]
    }
},
{
    timestamps: true
})

// Hash password before saving
userSchema.pre('save',async function(next){
    if(!this.isModified('password'))  return next();

    try{
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
    }

    catch(error){
    next(error);
    }
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User',userSchema);

export default User;