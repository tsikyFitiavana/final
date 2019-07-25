const Control = require('../../controllers/controller')
const Particule = require('../../controllers/particulier/particulier')
const Admin = require('../../controllers/atelier/atelier')
const express = require("express");
const router = express.Router();

router.post('/register', Control.register)
router.post("/login", Control.login)
router.post('/particulier', Particule.createPart);
router.post('/newArticle', Admin.create);
router.get('/newArticle', Admin.findAllArticle);
router.put('/putArticle/:profilId', Admin.update);
router.get('/newArticle/:idUser', Admin.findOne);
router.get('/newArticleImage/:image', Admin.findOneArticle);

module.exports = router;
