const express = require('express');
const ctrl = require('../../controllers/contacts');

const validateBody = require('../../middlewares/validateBody');
const {joiSchemaAll, joiSchemaFavorite} = require('../../schema/JoiSchema');

const router = express.Router();

router.get('/', ctrl.listContacts);
router.get('/:contactId', ctrl.getContactById);
router.post('/', validateBody(joiSchemaAll), ctrl.addContact);
router.delete('/:contactId', ctrl.removeContact);
router.put('/:contactId', validateBody(joiSchemaAll), ctrl.updateContact);
router.patch('/:contactId/favorite', validateBody(joiSchemaFavorite), ctrl.updateContact);

module.exports = router;