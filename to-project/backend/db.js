


const mongoose = require ("mongoose");


mongoose.connect("mongodb+srv://saurabh2836:4BKvdhKn8483VU3b@cluster0.se6rtap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo = mongoose.model('todos',todoSchema);


module.exports = {
    todo
}

