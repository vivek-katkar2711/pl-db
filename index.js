import express from "express"
import {insertUser, updateUser, deleteUser, getAllUsers, getSpecificUser} from "./crud-operations.js"
import {} from "./db-connect.js"
import {} from "./mysql.js"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/insert", (req, res) => {
    insertUser();
    res.status(200).json({
        message : "User created !!!!"
    });
})

app.get("/delete", (req, res) => {
    deleteUser("john.doe@example.com");
    res.status(200).json({
        message : "User deleted !!!!"
    });
})

app.get("/update", (req, res) => {
    updateUser("john.doe@example.com");
    res.status(200).json({
        message : "User updated !!!!"
    });
})

app.get("/delete", (req, res) => {
    deleteUser("john.doe@example.com");
    res.status(200).json({
        message : "User updated !!!!"
    });
})

app.get("/getusers", (req, res) => {
    getAllUsers();
    res.status(200).json({
        message : "User Fetcjed !!!!"
    });
})

app.get("/get-single-user", (req, res) => {
    getSpecificUser("john.doe@example.com");
    res.status(200).json({
        message : "User Fetched !!!!"
    });
})

app.listen(3000, ()=>{
    console.log("App is running on port 3000");
})