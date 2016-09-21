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
let Footer_Component = class Footer_Component {
};
Footer_Component = __decorate([
    component_providers_1.NgComponent({
        selector: 'footer',
        template: `<div class="footer fixed" style="font-size: 10px; font-weight: 100;">
    <div class="pull-right">
        10GB of
        <strong style="font-weight: 500">250GB</strong>
        Free.
    </div>
            <div>
                <strong style="font-weight: 500">Copyright</strong>
                Fastcase © 2016-2017
            </div>
    </div>
`
    }), 
    __metadata('design:paramtypes', [])
], Footer_Component);
exports.Footer_Component = Footer_Component;
