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



app.get('users',(req,res)=> {
    res.json(users)
})


router.post('/users', async (req, res) => {
  try{
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
    console.log(salt)
    console.log(hashedPassword)
  const user = { name: req.body.name, password: hashedPassword }
  users.push(user)
  res.status(201).send()
  bcrypt.hash(salt + 'password')
}catch{
  res.status(500).send()
}
})

module.exports = router;
