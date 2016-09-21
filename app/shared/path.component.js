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
const component_providers_1 = require('../utils/component.providers');
let breadcrumb_Component = class breadcrumb_Component {
    constructor() {
    }
    ngOnInit() {
        console.log(this.title);
    }
};
__decorate([
    component_providers_1.NgInput(), 
    __metadata('design:type', String)
], breadcrumb_Component.prototype, "title", void 0);
breadcrumb_Component = __decorate([
    component_providers_1.NgComponent({
        selector: `breadcrumb`,
        template: `<div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-12">
            <ol class="breadcrumb pull-left">
                <li>
                    <a routerLink="/">Home</a>
                </li>
                <li class="active">
                    <strong>{{title}}</strong>
                </li>
            </ol>
        </div>
    </div>
`
    }), 
    __metadata('design:paramtypes', [])
], breadcrumb_Component);
exports.breadcrumb_Component = breadcrumb_Component;
