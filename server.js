const express=require('express');

const app=express();

app.get('/',(req,res)=>{

    res.send('Hello Express');

});
app.get('/about',(req,res)=>{

    res.send('<h1>  About us  </h1> ');

});

app.get('/contact',(req,res)=>{



  res.send({

          name:'Suahil',
          likes:['Biking','Swimming','Riding']  
  });


});



app.listen(3000);
