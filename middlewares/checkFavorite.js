const Contact = require('../models/contact');

const checkFavorite = async (req, res, next) => {
  const { favorite } = req.query;
  const { _id: owner } = req.user;

  if (favorite) {
    const data = await Contact.find({ owner, favorite });
    res.json(data);
  };

  next();
};

module.exports = checkFavorite;