var express = require('express');
var router = express.Router();
var monk=require('monk');
var dbs=monk('localhost:27017/todo');
var list = dbs.get('list');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/get', function(req, res, next) {
  list.find({},function(err,docs){
  res.send(docs);
  });
});
router.post('/post', function(req, res, next) {
  console.log(req.body);
  list.insert(req.body, function(err,docs){
  res.send(docs);
});
});
router.delete('/delete/:_id', function(req, res, next) {
  var id = req.params._id;
  console.log(id);
  list.remove({_id:id}, function(err,docs){
  res.send(docs);
});
});
module.exports = router;
