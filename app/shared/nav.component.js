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
const core_1 = require('@angular/core');
let Nav_Component = class Nav_Component {
    constructor() {
        this.authrizied = true; //是否验证通过。
        this.user = {
            fullname: `Rico Wang`,
            email: `133302599@qq.com`
        };
        this.authrizied = true;
    }
};
Nav_Component = __decorate([
    core_1.Component({
        selector: `nav-bar`,
        template: `<nav  class="navbar navbar-fixed-top" role="navigation" style="min-height: 40px" *ngIf="user && authrizied">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Super Docs</a>
                    <p class="navbar-text">Preview 1.0</p>
                </div>
                <ul class="nav nav-left-links text-center">
                    <li routerLink="/lib">
                        Libraries
                    </li>
                    <li>
                        Files
                    </li>
                    <li routerLink="/script">
                        Script Editor
                    </li>
                </ul>
                <ul class="nav navbar-top-links navbar-right" style="margin-right: -10px;">
                    <li class="dropdown" style="padding-top: 0px">
                        <a style="color: #676a6c" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="/libs/images/i8.JPG" class="img-circle prof" />

                        </a>
                        <ul class="dropdown-menu" style="width: 200px; border-radius: 0;">
                            <li>
                                <a href="#" class="account-details">
                                    <img alt="image" class="img-circle avator" src="/libs/images/i8.JPG">
                                    <div class="m-b-xs" style="margin-bottom: 10px">
                                        {{user.fullName}}
                                    </div>
                                    <div class="account-details__email">{{user.email}}</div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item"  >
                                    <i class="fa fa-tasks" aria-hidden="true"></i> Account Setting
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item">
                                    <i class="fa fa-bell" aria-hidden="true"></i> Notifications
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" >
                                    <i class="fa fa-sign-out" aria-hidden="true"></i> Login Out
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
`
    }), 
    __metadata('design:paramtypes', [])
], Nav_Component);
exports.Nav_Component = Nav_Component;
