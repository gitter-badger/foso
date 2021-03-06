'use strict';

var foso = require('../');
var js = require('fosify-js');
var less = require('fosify-less');
var sass = require('fosify-sass');

foso
  .please({
    src: './scripts',
    dest: './build',
    host: 'example.com',
    secureHost: 'secure.example.com',
    watch: true,
    minify: true
  })
  .fosify(js)
  .fosify(less)
  .fosify(sass)
  .now(function() {
    console.log('bundled');
  });
