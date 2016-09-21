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
const module_providers_1 = require('../../utils/module.providers');
const libs_list_component_1 = require('./libs.list.component');
const libs_create_component_1 = require('./libs.create.component');
const libs_log_component_1 = require('./libs.log.component');
const libs_detail_component_1 = require('./libs.detail.component');
const libs_service_1 = require('./libs.service');
const libs_routing_1 = require('./libs.routing');
let LibsModule = class LibsModule {
};
LibsModule = __decorate([
    module_providers_1.NgModule({
        imports: [module_providers_1.CommonModule, libs_routing_1.routing, module_providers_1.FormsModule, module_providers_1.HttpModule],
        declarations: [libs_list_component_1.Lib_List_Component, libs_create_component_1.Lib_Create_Component, libs_log_component_1.Lib_Logs_Component, libs_detail_component_1.Lib_Detail_Component],
        providers: [libs_service_1.Lib_Service]
    }), 
    __metadata('design:paramtypes', [])
], LibsModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LibsModule;
