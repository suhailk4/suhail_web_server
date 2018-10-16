const express=require('express');

var app=express();

app.use(express.static(__dirname+ '/public' ));

app.get('/',(req,res)=>{


   res.send({

          name:'Suhail',
          likes:["Biking","Riding","Cycling"]


   });


});


app.get('/bad',(req,res)=>{


        res.send(
          {
                  errorMessage:"Unable To Handle Request"


          }
        );


});




app.listen(3000);
