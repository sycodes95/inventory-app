const async = require('async')

const Guns = require('../models/guns')

const Category = require('../models/category')

const { body, validationResult } = require("express-validator");

exports.index = function (req, res, next) {

  Guns.find()
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      res.render('index', {
        title: 'Gun Database',
        gun_list: gun_name
      })
    })
}

exports.assault_rifle = function (req, res, next) {
  Guns.find({category: 'Assault rifle'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('assault_rifle', {
        title: 'Assault Rifles',
        gun_list: gun_name
      })
    })
}

exports.hand_gun = function (req, res, next) {
  Guns.find({category: 'Handgun'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('hand_gun', {
        title: 'Hand guns',
        gun_list: gun_name
      })
    })
}

exports.sniper_rifle = function (req, res, next) {
  Guns.find({category: 'Sniper rifle'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('sniper_rifle', {
        title: 'Sniper rifles',
        gun_list: gun_name
      })
    })
}

exports.marksman_rifle = function (req, res, next) {
  Guns.find({category: 'Marksman rifle'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('marksman_rifle', {
        title: 'Marksman rifles',
        gun_list: gun_name
      })
    })
}

exports.shot_gun = function (req, res, next) {
  Guns.find({category: 'Shotgun'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('shot_gun', {
        title: 'Shot guns',
        gun_list: gun_name
      })
    })
}

exports.smg = function (req, res, next) {
  Guns.find({category: 'SMG'})
    .sort([['name', 'ascending']])
    .exec((err, gun_name) =>{
      if(err){
        return next(err)
      }
      console.log(gun_name);
      res.render('smg', {
        title: 'Submachine Guns',
        gun_list: gun_name
      })
    })
}

exports.gun_detail = (req, res, next) =>{
  Guns.findById(req.params.id).exec((err, detail_gun) =>{
    if (err) {
      return next(err);
    }
    if (detail_gun == null) {
      const err = new Error("Item not found");
      err.status = 404;
      return next(err);
    }

    res.render('gun_detail', {
      title: detail_gun.name,
      gun: detail_gun
    })
  })
    
}

exports.gun_purchase_post = (req, res, next) =>{
  Guns.findByIdAndUpdate(req.body.id, {$inc: {stock: -1} }, (err, updated) => {
    if(err) {
      return next (err)
    }
    res.render('thankyou')
  });
}

exports.gun_purchase_thank_you = (req, res) =>{
  res.render('thankyou')
}







/*
request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))

exports.gun_list = function (req, res, next) {
  Guns.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_guns){
      if(err) {
        return next(err)
      }

      res.render('gun_list', {
        
        gun_list: list_guns
      })
    })
}
*/