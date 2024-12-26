const express = require('express')
const router = express.Router();
const userController = require('../controllers/user-controller')
const authMiddleware = require('../Middleware/validate')

router.route('/register').post(userController.register);
router.route('/login').post(userController.login);
router.route('/userdata').get(authMiddleware ,userController.user);
module.exports = router;