import {NgModule, CommonModule, FormsModule, HttpModule} from '../../utils/module.providers';
import {Lib_List_Component} from './libs.list.component';
import {Lib_Create_Component} from './libs.create.component';
import {Lib_Logs_Component} from './libs.log.component';
import {Lib_Detail_Component} from './libs.detail.component';

import {Lib_Service} from './libs.service';
import {routing} from './libs.routing';

@NgModule({
    imports: [CommonModule, routing, FormsModule, HttpModule],
    declarations: [Lib_List_Component, Lib_Create_Component, Lib_Logs_Component, Lib_Detail_Component],
    providers: [Lib_Service]
})
export default class LibsModule { }
