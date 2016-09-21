import {NgComponent,NgInput,OnInitComponent} from '../../utils/component.providers';
import {Lib_Log} from './libs.entity';

@NgComponent({
    selector:`lib-logs`,
    template:`<div class="col-lg-4">
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
})
export class Lib_Logs_Component implements OnInitComponent{

    @NgInput()
    logs:Lib_Log[];

    ngOnInit(){
        console.log(this.logs[0]);
    }
}
