
import {NgComponent,NgInput,OnInitComponent} from '../utils/component.providers';
@NgComponent({
    selector:`breadcrumb`,
    template:`<div class="row wrapper border-bottom white-bg page-heading">
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
})
export class breadcrumb_Component implements OnInitComponent{
    @NgInput()
    title:string;

    constructor(){

    }

    ngOnInit(){
        console.log(this.title);
    }

}
