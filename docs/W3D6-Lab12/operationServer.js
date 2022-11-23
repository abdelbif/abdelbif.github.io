

const express = require('express');
//const ops = require('./ops.js');
const bodyParser=require("body-parser");

//express app

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// listen to port for request
app.listen(8080, ()=>{
  console.log('Listening on port 8080')
});


app.get('/',(req,res)=>{
 //res.send('<p> Here is my home Page </p>');
  res.sendFile('./html/operation.html',{root: __dirname});
});

app.post('/',(req,res)=>{
  const opr = req.body.selector;
  const num1 = parseFloat(req.body.first);
  const num2 = parseFloat(req.body.second);
  let result;
  //console.log(opr);
  
  switch(opr){
    case "Addition":
    result = add(num1, num2);
    res.send('The Answer is:   ' + result  + ' <a href=" /">  Another Calculation </a>');
    break;

    case "Substraction":
    result = subtract(num1, num2);
    res.send('The Answer is:   ' + result  + ' <a href=" /">  Another Calculation </a>');
    break;

    case "Multiplication":
    result = multiply(num1, num2);
    res.send('The Answer is:   ' + result  + ' <a href=" /">  Another Calculation </a>');
    break;

    case "Division":
    result = divide(num1, num2);
    res.send('The Answer is:   ' + result  + ' <a href=" /">  Another Calculation </a>');
    break;

    // default:
    // result = "Sorry, please enter a valid operator!"
  }


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
  if(b===0) return "Not Available";
    return a / b;
}

});
// redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });

app.use((req,res)=>{
    res.status(404).send('<p> 404 - OOPS  That page does not exist</p>');
});
