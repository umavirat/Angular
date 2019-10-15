const express = require('express');
const router = express.Router();
const userControl=require('../controllers/userControl');
const postControl=require('../controllers/postControl');
const app = express();


 router.post('/user/signup',userControl.register);
 router.post('/user/login',userControl.login);
 
 module.exports = router;

 