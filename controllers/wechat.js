/**
 * Created by starsea on 2016/1/8.
 */
var Wechat = {};

var crypto = require("crypto");
var xml2js = require("xml2js");
var config = require("../config/wechat");
Wechat.checkSignature = function(params){
    console.log(params);
    var timestamp = params.timestamp;
    var nonce = params.nonce;
    var token = config.token;
    var shasum = crypto.createHash('sha1');
    var arr = [token, timestamp, nonce].sort();
    var signature = shasum.update(arr.join('')).digest('hex');
    console.log("signature is " + signature);
    if(signature === params.signature){
        return true;
    }else{
        return false;
    }
};

module.exports = Wechat;