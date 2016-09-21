"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
require('./rxjs-extensions');
var http_2 = require('@angular/http');
exports.Response = http_2.Response;
const core_1 = require('@angular/core');
let Http_Service = class Http_Service {
    /**
     * [constructor description]
     * @param  {Http}   privatehttp [description]
     * @return {[type]}             [description]
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Use http request get data from api ..
     * @param  {api}    string [where the request to]
     */
    getData(api) {
        var r = this.http.get(api);
        var t = r.map((rr) => rr.json());
        return t;
    }
    /**
     * post data to server.
     */
    postData(api, data) {
        let body = JSON.stringify({ name });
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(`[post data]: ${body} \n [api address]: ${api}`);
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /**
     * @param  {Response} res [response object]
     * @return {[any]}       [return data of response]
     */
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
    /**
     * error handler
     * @param  {any}    error [description]
     * @return {[type]}       [description]
     */
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
Http_Service = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], Http_Service);
exports.Http_Service = Http_Service;
