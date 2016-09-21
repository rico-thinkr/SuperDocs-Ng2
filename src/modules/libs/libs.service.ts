
import {Http_Service,Response} from '../../utils/http.providers';
import {Lib_Detail} from './libs.entity';
import { Injectable } from '@angular/core';

export class Lib_Service extends Http_Service {

    getLibs(){
        var api = '/app_data/lib.json';
        var x = this.getData<Array<Lib_Detail>>(api);
        console.log(x);
        return x;
    }
}
