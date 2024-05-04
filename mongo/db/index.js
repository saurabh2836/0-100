const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://saurabh2836:test@cluster0.pgnzo2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}