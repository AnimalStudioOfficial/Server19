const express = require('express');
const router = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

router.get('/', asyncMiddleware(async (req, res) => {
 //res.json(ajax.responseText);
}));


module.exports = router;
