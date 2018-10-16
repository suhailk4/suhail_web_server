const express=require('express');

const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname+ '/views/partials');



app.set('viewEngine','hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCuurentYear',()=>{

  return new  Date().getFullYear();

});

hbs.registerHelper('screamIt', (text)=>{


  return text.toUpperCase();

});


app.get('/',(req,res)=>{

     res.render('Home1.hbs',{

          pageTitle:'Home Page',
          welcomeMessage:'Welcome Suhail on Home Page'



     });




});

app.get('/about',(req,res)=>{


  res.render('about.hbs',{

   pageTitle: 'About Us page' ,
   welcomeMessage:'Welcome Suhail on About us Page'



  });


});

app.listen(3000,()=>
{

   console.log("Server is runnnig on Port 3000");


});
