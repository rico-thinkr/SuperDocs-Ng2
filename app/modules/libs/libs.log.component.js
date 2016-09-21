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
let Lib_Logs_Component = class Lib_Logs_Component {
    ngOnInit() {
        console.log(this.logs[0]);
    }
};
__decorate([
    component_providers_1.NgInput(), 
    __metadata('design:type', Array)
], Lib_Logs_Component.prototype, "logs", void 0);
Lib_Logs_Component = __decorate([
    component_providers_1.NgComponent({
        selector: `lib-logs`,
        template: `<div class="col-lg-4">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>Library Log</h5>
            </div>

            <div class="ibox-content inspinia-timeline">

                <div class="timeline-item" *ngFor="let ll of logs">
                    <div class="row">
                        <div class="col-xs-3 date">
                            <i class="fa fa-briefcase"></i>
                            {{ll.timeString}}
                            <br>
                            <small class="text-navy">{{ll.duration}}</small>
                        </div>
                        <div class="col-xs-7 content no-top-border">
                            <p class="m-b-xs"><strong>{{ll.operation}}</strong></p>

                            <p>{{ll.message}}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }), 
    __metadata('design:paramtypes', [])
], Lib_Logs_Component);
exports.Lib_Logs_Component = Lib_Logs_Component;
