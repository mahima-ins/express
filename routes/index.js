var express = require('express');
var router = express.Router();
var expenses=require('../database/expenses')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(expenses)
  res.render('index', {title:"Expenses tracker",expensesList:expenses});
});
router.get('/add',function(req,res,next){
res.render('addExpense')
});
router.post('/saveexpense',function(req,res,next){
  let formData={
    "title":req.body.title,
    "paidBy": req.body.paidBy,
    "description":req.body.description,
    "amount":req.body.amount
  }
  console.log(formData)
  expenses.push({...formData,_id:expenses.length+1})
  res.redirect('/')
})

router.get('/delete/:index',function(req,res,next){
  expenses.splice(req.params.index,1);
  res.redirect('/')
  //console.log(req.params.index, req.params.mahima)

})
router.get('/edit/:id',function(req,res,next){
  const expense=expenses.find(expense=>expense._id==req.params.id)
  res.render('editExpense',{expense:expense})
})
router.post('/savedEdited/:id',function(req,res,next){
  let  formData={
    "title":req.body.title,
    "paidBy": req.body.paidBy,
    "description":req.body.description,
    "amount":req.body.amount
  }
  const index=expenses.findIndex(expense=>{return expense._id==req.params.id});
  expenses.splice(index,1,{_id:req.params.id,...formData})
  res.redirect('/')
})
 
module.exports = router;
