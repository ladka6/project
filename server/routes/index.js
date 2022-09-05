var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const users = []

router.get('/users', (req, res) => {
  res.json(users)
})

router.post('/users', (req, res) => {
  const user = { name: req.body.name, password: req.body.password }
  users.push(user)
  res.status(201).send()
})

module.exports = router;
