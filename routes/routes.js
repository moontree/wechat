/**
 * Created by starsea on 2016/1/8.
 */
"use strict";
var Router = require("koa-router");
var wechat = require("./wechat");
module.exports = function(app) {
    // register functions
    var router = new Router();

    router.use(function *(next) {
        this.type = "json";
        yield next;
    });
    /**
     * ����Ȩ�޼�����־��¼
     */
    router.use("/",function*(next){
        //console.log(this);
        yield next;
    });
    router.get("/index",function*(){
        this.body = "Hello world";
    });
    router.use("/wechat",wechat);
    app.use(router.routes());
};
