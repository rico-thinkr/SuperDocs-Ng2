

import {NgComponent,OnInitComponent} from '../../utils/component.providers';
import {Router} from '@angular/router';
@NgComponent({
    selector:'main-page',
    template:`
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
})
export class Home_Component implements OnInitComponent{
    private title:string;
    constructor(private r:Router){
    }

    ngOnInit(){
        console.log('init')
        var path = this.r.url.split('/');
        if (path.length==2){
            this.title="Dashboard"
        }
        if (path[1]=="lib"){
            this.title="Library"
        }
        if (path[1]=="file"){
            this.title="Files"
        }
        if (path[1]=="script"){
            this.title="Script"
        }

    }
}
