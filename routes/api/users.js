const express = require('express');
const ctrl = require('../../controllers/users');

const validateBody = require('../../middlewares/validateBody');
const { joiSchemaRegisterAndLogin } = require('../../schema/JoiSchema');

const router = express.Router();

router.post('/register', validateBody(joiSchemaRegisterAndLogin), ctrl.register);
router.post('/login', validateBody(joiSchemaRegisterAndLogin), ctrl.login);

module.exports = router;