const express = require('express');
const ctrl = require('../../controllers/users');

const auth = require('../../middlewares/auth');
const validateBody = require('../../middlewares/validateBody');
const { joiSchemaRegisterAndLogin, joiSchemaSubscription } = require('../../schema/JoiSchema');

const router = express.Router();

router.post('/register', validateBody(joiSchemaRegisterAndLogin), ctrl.register);
router.post('/login', validateBody(joiSchemaRegisterAndLogin), ctrl.login);
router.post('/logout', auth, ctrl.logout);
router.get('/current', auth, ctrl.current);
router.patch('/:contactId', auth, validateBody(joiSchemaSubscription), ctrl.updateUser);

module.exports = router;