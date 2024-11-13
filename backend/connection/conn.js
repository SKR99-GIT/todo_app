const mongoose = require("mongoose")
const conn = async() => {
    try{
        const response = await mongoose.connect("mongodb://localhost:27017/TaskManager");
        if (response) {
            console.log("Connected to DB");
        }
    }catch (error){
        console.log(error);
    }
};
conn();