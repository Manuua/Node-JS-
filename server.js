const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req , res ){
   res.render("pages/index");
})

app.get("/sobre" , function (req, res){
    res.render("about");
})

app.listen(8080);// falando p servidor que quando chamar 8080 ele chama oq está aqui//uma porta do localhost
console.log("funcionou")