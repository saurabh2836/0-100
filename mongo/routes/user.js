const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, Course, User } = require("../db"); //import the admin, course  model
const { default: mongoose } = require("mongoose");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    console.log("username",req.body.username);
    const username = req.body.username;
    const password = req.body.password;

    await User.create({// create a new user
        username: username,
        password: password
    })
    res.json({
        message: "User created successfully"
    })
});


router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

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
router.get('/courses', async (req, res) => { 
    // Implement listing all courses logic
     // Implement fetching all courses logic
     const response = await Course.find({}); // Fetching all the courses from the DB and send it back in the response

     res.json({
         courses: response
     })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;// get the course id from the request params
    const username = req.headers.username;

    await User.updateOne({// update the user with the new course purchased
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => { // Implement listing purchased courses logic
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router