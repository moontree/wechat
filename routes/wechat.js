/**
 * Created by starsea on 2016/1/25.
 */
var Router = require("koa-router");
var Wechat = require("../controllers/wechat");
var router = new Router();
router.get("/",function* (){
    var params = JSON.parse(JSON.stringify(this.request.query));
    console.log(params);
    if(Wechat.checkSignature(params)){
        console.log("signature true");
        this.body = params.echostr;
    }else{
        console.log("signature false");
        this.body = "something is wrong";
    }
});
module.exports = router.routes();