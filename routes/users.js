var express = require('express');
var router = express.Router();
var monk=require('monk');
var dbs=monk('localhost:27017/todo');
var items = dbs.get('items');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/getuser', function(req, res, next) {
  items.find({},function(err,docs){
  res.send(docs);
  });
});
router.post('/postuser', function(req, res, next) {
  console.log(req.body);
  items.insert({"title":req.body}, function(err,docs){
  res.send(docs);
});
});
router.delete('/delete/:_id', function(req, res, next) {
  var id = req.params._id;
  //console.log(id);
  items.remove({_id:id}, function(err,docs){
  res.send(docs);
});
});
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
