
import {Component} from '@angular/core';

@Component({
    selector:`nav-bar`,
    template:`<nav  class="navbar navbar-fixed-top" role="navigation" style="min-height: 40px" *ngIf="user && authrizied">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Work Promoter</a>
                    <p class="navbar-text">Preview 1.0</p>
                </div>
                <ul class="nav nav-left-links text-center">
                    <li>
                        Libraries
                    </li>
                    <li>
                        Files
                    </li>
                    <li routerLink="/home/script">
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
})
/**
 * 导航条组件
 */
export class Nav_Component{
    user:any;
    authrizied:boolean=true; //是否验证通过。
    constructor(){
        this.user = {
            fullname:`Rico Wang`,
            email:`133302599@qq.com`
        }
        this.authrizied=true;
    }
}
