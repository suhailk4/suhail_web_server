const express=require('express');

const hbs=require('hbs');


var app=express();

app.set('viewEngine','hbs');

app.use(express.static(__dirname+ '/public'));

app.get('/',(req,res)=>{

      res.render('Home1.hbs',{
      pageTitle: 'Home Page' ,
      welcomeMessage: "Welcome Suhail",
      currentyear:new Date().getFullYear()

});


});


app.get('/about',(req,res)=>{

   res.render('about.hbs',{

    pageTitle:'Aboutusssss   Page',
    currentyear: new Date().getFullYear()



   });



});

app.listen(3000,()=>{


  console.log("Server is running on port 3000");
});
