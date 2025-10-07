const router = require('express').Router();
const {body} = require('express-validator');
const ValidationMiddleware = require('../middlewares/validation.middleware');
const AuthMiddleware = require('../middlewares/auth.middleware');


module.exports = router;