const express = require('express');
const ctrl = require('../../controllers/contacts');

const auth = require('../../middlewares/auth');
const checkFavorite = require('../../middlewares/checkFavorite');
const validateBody = require('../../middlewares/validateBody');
const {joiSchemaAll, joiSchemaFavorite} = require('../../schema/JoiSchema');

const router = express.Router();

router.get('/', auth, checkFavorite, ctrl.listContacts);
router.get('/:contactId', auth, ctrl.getContactById);
router.post('/', auth, validateBody(joiSchemaAll), ctrl.addContact);
router.delete('/:contactId', auth, ctrl.removeContact);
router.put('/:contactId', auth, validateBody(joiSchemaAll), ctrl.updateContact);
router.patch('/:contactId/favorite', auth, validateBody(joiSchemaFavorite), ctrl.updateContact);

module.exports = router;