/****************************
* File Name: Routes.js      *
* Author: Ammar S.A.A       *
* Output: Router for users  *
****************************/

const express = require('express')
const router = express.Router()

const { Signin, Signup, deleteUser, updateUser, userByID, userByEmail, getUsers, search } = require('./Controller')
const authenticateToken = require('../../middleware/authenticateToken')

router.post('/signin', Signin)
router.post('/signup', Signup)
router.get('/getUsers', authenticateToken, getUsers)
router.get('/getUserByID', authenticateToken, userByID)
router.get('/getUserByEmail', authenticateToken, userByEmail)
router.delete('/deleteUser', authenticateToken, deleteUser)
router.put('/updateUser', authenticateToken, updateUser)
router.get('/search', search)

// router.get('/signup', (req, res) => {
//     // Handle the request for the /api/users route
//     res.send('Hello from /api/users/signup route');
// });


module.exports = router