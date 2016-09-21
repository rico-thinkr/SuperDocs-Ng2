
import {NgComponent,NgInput,OnInitComponent} from '../../utils/component.providers';
// import {Lib_Service} from '../../../services/services';
// import {cfg} from './directive';
import {Lib_Create} from './libs.entity';


@NgComponent({
    selector:`lib-create`,
    template:`<div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title text-center">
                <h5 style="float: none; font-weight: 200; display: block;font-size: 18px">
                    Create New Library
                </h5>
                <small>Later, you can organize documents using this library.</small>
            </div>
            <div class="ibox-content">
                <form method="get" class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Library Name</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control"  [(ngModel)]="lib.name" name="name" maxlength="15" >
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Choose Label Color</label>

                        <div class="col-sm-10" style="padding-top: 8px">
                            <span class="label label-primary">Label</span>
                            <span class="label label-info">Label</span>
                            <span class="label label-success">Label</span>
                            <span class="label label-warning">Label</span>
                            <span class="label label-danger">Label</span>

                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <a class="btn btn-primary " (click)='create()'>Create</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>`
})
export class Lib_Create_Component implements OnInitComponent{

    constructor(){

    }
    lib:Lib_Create = new Lib_Create();
    create(){
        console.log(this.lib.name);
        // if (this.lib!==null && this.lib!==undefined){
        //     this.service.create(this.lib).then((rs)=>{
        //         console.log(rs);
        //     })
        //
        // }

    }

    ngOnInit(){
        // this.lib=new Lib_Create();
    }
}
