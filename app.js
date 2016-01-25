/**
 * Created by starsea on 2016/1/8.
 */
var app = require('koa')()
    , koa = require('koa-router')()
    , logger = require('koa-logger')
    , json = require('koa-json')
    , onerror = require('koa-onerror');

// global middlewares
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

//app.use(function *(){
//    this.body = 'Hello World';
//});
//
//app.listen(80);

// routes definition
require('./routes/routes')(app);

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
    log.error('server error', err, ctx);
});

module.exports = app;
