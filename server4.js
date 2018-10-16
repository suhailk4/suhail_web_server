const express=require('express');

const hbs = require('hbs');

const fs=require('fs');


 var app=express();



 app.set('view engine', 'hbs');

 hbs.registerPartials(__dirname +'/views/partials');




 hbs.registerHelper('getCuurentYear',()=>{


return new Date().getFullYear();

 });

// app.use((req,res,next)=>{
//
//   res.render('maintenance.hbs');
//
//
// });


app.use((req,res,next)=>{

      var now =new Date().toString();
      var log=`${now} ${req.method} ${req.url}`;
      console.log(log);
fs.appendFile('Server.log', log + '\n ',(err)=>{
   if(err){

   console.log('Unable to appendFile');

   }

   next();


});



});


 app.use(express.static(__dirname+'/public'));


hbs.registerHelper('screamIt', (text)=>{


 return text.toUpperCase();

});


app.get('/',(req,res)=>{

 res.render('Home1.hbs',{

   pageTitle:'HOME page',
   welcomeMessage: 'welcome To Home Page'

 });


});


app.get('/about',(req,res)=>{

  res.render('about.hbs',{

 pageTitle:'About',
 welcomeMessage : 'this is about page'

  });

});



app.listen(3000,()=>{

  console.log('Server is running on Port 3000');
});
