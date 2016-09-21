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
const libs_service_1 = require('./libs.service');
let Lib_List_Component = class Lib_List_Component {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        console.log("call service");
        this.service.getLibs().subscribe(f => this.libs = f);
    }
    getDetail(lib) {
        this.selectedLib = lib;
        console.log(this.selectedLib);
    }
};
Lib_List_Component = __decorate([
    component_providers_1.NgComponent({
        selector: `lib-list`,
        template: `<div class="col-lg-2" *ngIf="libs">
        <div class="ibox float-e-margins">
            <div class="ibox-content">
                <div class="file-manager">
                    <button class="btn btn-primary btn-block" routerLink="/script">Create Library</button>
                    <div class="hr-line-dashed"></div>
                    <h5>Libraries</h5>
                    <ul class="folder-list" style="padding: 0">
                        <li *ngFor='let lib of libs'>
                            <a (click)="selectedLib= lib">
                                <i class="fa fa-folder"></i>
                                {{lib.name}}
                                <span class="label label-warning pull-right" style="padding: 2px 5px;font-size: 6px">{{lib.fileCount}}</span>
                            </a>
                        </li>
                    </ul>
                    <h5 class="tag-title">Tags</h5>
                    <ul class="tag-list" style="padding: 0">

                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

    </div>
    <div class="col-lg-10 animated fadeInRight" *ngIf="selectedLib">
        <div class="row">
            <lib-detail [lib]="selectedLib"></lib-detail>
            <!-- -->
            <lib-logs [logs]="selectedLib.logs"></lib-logs>
        </div>
    </div>`
    }), 
    __metadata('design:paramtypes', [libs_service_1.Lib_Service])
], Lib_List_Component);
exports.Lib_List_Component = Lib_List_Component;
