"use strict";
const http_providers_1 = require('../../utils/http.providers');
class Lib_Service extends http_providers_1.Http_Service {
    getLibs() {
        var api = '/app_data/lib.json';
        var x = this.getData(api);
        console.log(x);
        return x;
    }
}
exports.Lib_Service = Lib_Service;
