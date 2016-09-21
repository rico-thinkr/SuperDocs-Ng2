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
const component_providers_1 = require('../../utils/component.providers');
// import {Lib_Service} from '../../../services/services';
// import {cfg} from './directive';
const libs_entity_1 = require('./libs.entity');
let Lib_Create_Component = class Lib_Create_Component {
    constructor() {
        this.lib = new libs_entity_1.Lib_Create();
    }
    create() {
        console.log(this.lib.name);
        // if (this.lib!==null && this.lib!==undefined){
        //     this.service.create(this.lib).then((rs)=>{
        //         console.log(rs);
        //     })
        //
        // }
    }
    ngOnInit() {
        // this.lib=new Lib_Create();
    }
};
Lib_Create_Component = __decorate([
    component_providers_1.NgComponent({
        selector: `lib-create`,
        template: `<div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title text-center">
                <h5 style="float: none; font-weight: 200; display: block;font-size: 18px">
                    Create New Library
                </h5>
                <small>Later, you can organize documents using this library.</small>
            </div>
            <div class="ibox-content">
                <form method="get" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Library Name</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control"  [(ngModel)]="lib.name" name="name" maxlength="15" >
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Choose Label Color</label>

                        <div class="col-sm-10" style="padding-top: 8px">
                            <span class="label label-primary">Label</span>
                            <span class="label label-info">Label</span>
                            <span class="label label-success">Label</span>
                            <span class="label label-warning">Label</span>
                            <span class="label label-danger">Label</span>

                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <a class="btn btn-primary " (click)='create()'>Create</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>`
    }), 
    __metadata('design:paramtypes', [])
], Lib_Create_Component);
exports.Lib_Create_Component = Lib_Create_Component;
