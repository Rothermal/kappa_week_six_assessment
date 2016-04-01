/**
 * Created by JFCS on 4/1/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var Heroes = require('../models/hero');


router.get('/hero',function(req,res){
   Heroes.find({},function(err,data){
      if (err){
         console.log(err);
      }
      res.send(data);
   });
});

router.post('/hero',function(req,res){
   console.log('hero to be posted',req.body);
   var addedHero = new Heroes({
      alias : req.body.alias,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      city: req.body.city,
      power_name: req.body.power_name
   });

   addedHero.save(function(err,data){
      if (err){
         console.log(err);
      }
      res.send(data);
   });

});

router.delete('/hero/:id',function(req,res){
   console.log('hit delete route',req.params.id);
   Heroes.remove({_id:req.params.id},function (err,data){
      if (err){
         console.log('err on delete',err);
      }
      res.send(data);
   });
});


router.get('/',function(request,response){
   response.sendFile(path.join(__dirname,'../public/views/index.html'));
});


router.get('/*',function(request,response){
   response.redirect('/');
});

module.exports = router;