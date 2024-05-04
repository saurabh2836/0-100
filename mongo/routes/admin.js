const express = require("express");
const adminMiddleware = require("../middleware/admin");
const userMiddleware = require("../middleware/user");

const { Admin, Course, User } = require("../db"); //import the admin, course  model
const router = express.Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
console.log("JWT_SECRET",JWT_SECRET);
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // check if a user with this username already exists

    await Admin.create({
        username: username,
        password: password
    }).then(function(){
                res.json({
                    message: 'Admin created successfully'
                })
    }).catch(function(){
        res.json({
            message:"Issue  in creating admin"
        })
    });

});


router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // You need to create a course in the DB with the details given in the request body
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod

    const newCourse = await Course.create({ // create a new course
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   
    // Fetching all the courses from the DB and send it back in the response
    const response = await Course.find({});

    res.json({
        courses: response // send the courses in the response
    })

});

router.post('/courses/:courseId',userMiddleware,(req,res) =>{

        const courseId = req.params.courseId;
        const username = req.headers.username;


        User.updateOne({
                username:username,

        },{
            purchasedCourses:{
                "$push":courseId
            }
        })
        res.json({
            message:"Update the course with "+user 
        })
});

router.get("/purchasedCourses",userMiddleware,(req,res)=>{
    
})

module.exports = router;