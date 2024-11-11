import mongoose from "mongoose";

const User = mongoose.model("User", new mongoose.Schema({
        name: {
            type: String,
            required: false,
            minlength: 3,
            maxlength: 50,
            trim: true
        },
        email: {
            type: String,
            required: false,
            unique: true,
            lowercase: true,
            match: /.+\@.+\..+/
        },
        mobile: {
            type: Number,
            required: false,
            unique: true,
            minlength: 10,
            maxlength: 15
        },
        isActive: {
            type: Boolean,
            default: true  
        },
        birthDate: {
            type: Date,
            required: false
        },
        profilePicture: {
            type: Buffer 
        },
        hobbies: {
            type: [String], 
            default: [] 
        },
        address: {
            street: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
            country: {
                type: String,
                required: false
            }
        }
}));
      
export {User};