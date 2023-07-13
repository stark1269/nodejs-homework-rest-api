const HttpError = require('../utils/error');
const ctrlWrapper = require('../utils/ctrlWrapper');
const Contact = require('../models/contact');

const listContacts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { _id: owner } = req.user;

  const skip = (page - 1) * limit;

  const data = await Contact.find({owner}, '', {skip, limit});
  res.json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  res.json(data);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Contact.create({...req.body, owner});
  res.status(201).json(data);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndRemove(contactId);
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json({ "message": "contact deleted" });
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!data) {
    throw HttpError(404, 'Not found');
  }
  res.json(data);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};