const express = require('express');
const router = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

router.get('/', asyncMiddleware(async (req, res) => {
  //const todos = await prisma.TodoItem.findMany();
  var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
if (ajax.readyState == 4) {
 alert(ajax.responseText);
 res.json(ajax.responseText);
}
};
ajax.open("GET", "ajax.php", true);
ajax.send(null);
}));


module.exports = router;
