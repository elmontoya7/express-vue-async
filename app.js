var express = require('express');
var path = require('path');
var expressVue = require("express-vue");
var index = require('./routes/index');
require("babel-core/register");
require("babel-polyfill");

var app = express();

var vueOptions = {
  rootPath: path.join(__dirname, './views'),
  vueVersion: '2.5.16'
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

app.use('/', index);

app.listen(3000, () => {});
