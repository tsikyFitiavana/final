const Control = require('../../controllers/controller')

const Admin = require('../../controllers/atelier/atelier')
const express = require("express");
const router = express.Router();

router.post('/register', Control.register)
router.post("/login", Control.login)
router.post('/newArticle', Admin.create);
router.get('/newArticle', Admin.findAllArticle);
router.get('/newArticle/:image', Admin.findOneArticle);

module.exports = router;
