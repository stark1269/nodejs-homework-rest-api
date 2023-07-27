const express = require('express');
const ctrl = require('../../controllers/users');

const auth = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');
const validateBody = require('../../middlewares/validateBody');
const { joiSchemaRegisterAndLogin, joiSchemaSubscription, joiSchemaVerifyEmail } = require('../../schema/JoiSchema');

const router = express.Router();

router.post('/register', validateBody(joiSchemaRegisterAndLogin), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);
router.post('/verify', validateBody(joiSchemaVerifyEmail), ctrl.resendVerifyEmail);

router.post('/login', validateBody(joiSchemaRegisterAndLogin), ctrl.login);
router.post('/logout', auth, ctrl.logout);
router.get('/current', auth, ctrl.current);

router.patch('/avatars', auth, upload.single('avatar'), ctrl.updateAvatar);
router.patch('/:contactId', auth, validateBody(joiSchemaSubscription), ctrl.updateUser);

module.exports = router;