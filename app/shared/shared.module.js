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
const module_providers_1 = require('../utils/module.providers');
const nav_component_1 = require('./nav.component');
const path_component_1 = require('./path.component');
const footer_component_1 = require('./footer.component');
const shared_routing_1 = require('./shared.routing');
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    module_providers_1.NgModule({
        imports: [module_providers_1.CommonModule, shared_routing_1.routing],
        declarations: [footer_component_1.Footer_Component, path_component_1.breadcrumb_Component, nav_component_1.Nav_Component],
        exports: [footer_component_1.Footer_Component, nav_component_1.Nav_Component, path_component_1.breadcrumb_Component,
            module_providers_1.CommonModule, module_providers_1.FormsModule]
    }), 
    __metadata('design:paramtypes', [])
], SharedModule);
exports.SharedModule = SharedModule;
