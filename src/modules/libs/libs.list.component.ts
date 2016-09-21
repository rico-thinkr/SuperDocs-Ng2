import {NgComponent,NgInput,OnInitComponent} from '../../utils/component.providers';
import {Lib_Detail} from './libs.entity';
import {Lib_Service} from './libs.service';
@NgComponent({

    selector:`lib-list`,
    template:`<div class="col-lg-2" *ngIf="libs">
        <div class="ibox float-e-margins">
            <div class="ibox-content">
                <div class="file-manager">
                    <button class="btn btn-primary btn-block" routerLink="/script">Create Library</button>
                    <div class="hr-line-dashed"></div>
                    <h5>Libraries</h5>
                    <ul class="folder-list" style="padding: 0">
                        <li *ngFor='let lib of libs'>
                            <a (click)="selectedLib= lib">
                                <i class="fa fa-folder"></i>
                                {{lib.name}}
                                <span class="label label-warning pull-right" style="padding: 2px 5px;font-size: 6px">{{lib.fileCount}}</span>
                            </a>
                        </li>
                    </ul>
                    <h5 class="tag-title">Tags</h5>
                    <ul class="tag-list" style="padding: 0">

                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

    </div>
    <div class="col-lg-10 animated fadeInRight" *ngIf="selectedLib">
        <div class="row">
            <lib-detail [lib]="selectedLib"></lib-detail>
            <!-- -->
            <lib-logs [logs]="selectedLib.logs"></lib-logs>
        </div>
    </div>`
})
export class Lib_List_Component implements OnInitComponent{


    libs:Array<Lib_Detail>;
    selectedLib :Lib_Detail;
    constructor(private service:Lib_Service){

    }


    ngOnInit(){
        console.log("call service");
        this.service.getLibs().subscribe(f=>this.libs=f);
    }


    getDetail(lib:Lib_Detail){
        this.selectedLib = lib;
        console.log(this.selectedLib);
    }
}
