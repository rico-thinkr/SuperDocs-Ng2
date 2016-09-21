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
const router_1 = require('@angular/router');
let Home_Component = class Home_Component {
    constructor(r) {
        this.r = r;
    }
    ngOnInit() {
        console.log('init');
        var path = this.r.url.split('/');
        if (path.length == 2) {
            this.title = "Dashboard";
        }
        if (path[1] == "lib") {
            this.title = "Library";
        }
        if (path[1] == "file") {
            this.title = "Files";
        }
        if (path[1] == "script") {
            this.title = "Script";
        }
    }
};
Home_Component = __decorate([
    component_providers_1.NgComponent({
        selector: 'main-page',
        template: `
    <nav-bar></nav-bar>
    <breadcrumb title="{{title}}"></breadcrumb>
    <div id="wrapper" style="margin-top:40px">
        <div class="row">
            <div class="col-lg-12">
                <div class="wrapper wrapper-content animated fadeInUp">
                    <div class="ibox">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <footer></footer>`
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], Home_Component);
exports.Home_Component = Home_Component;
