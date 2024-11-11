import {User} from "./schema.js";

async function insertUser(){
    const newUser = await User.create({
        name: 'John Doe',
        email: 'john.doe@example.com',
        mobile: 1234567890,
        isActive: true,
        birthDate: new Date('1990-01-01'),
        // profilePicture: Buffer.from('image-data-here', 'base64'),
        hobbies: ['Reading', 'Traveling'],
        address: {
            street: '123 Main St',
            city: 'Example City',
            country: 'Example Country'
        }
    });

    console.log("User created");
}

async function updateUser(email){
    const updatedUser = await User.findOneAndUpdate(
        {email : email},
        {
            name: 'John Doe Updated',
            mobile: 9876543210,
            hobbies: ['Reading', 'Swimming']
        }
    );

    if(!updateUser){
        console.log("User not found");
    }else{
        console.log("User deleted successfully");
    }
}

async function deleteUser(email){
    const deletedUser = await User.findOneAndDelete({email : email});

    if(!deleteUser){
        console.log("User not found");
    }else{
        console.log("User deleted successfully");
    }
}

async function getAllUsers(){
    const users = await User.find();
    console.log(users);
}

async function getSpecificUser(email){
    const user = await User.find({email : email});
    console.log(user);
}

export {insertUser, updateUser, deleteUser, getAllUsers, getSpecificUser};