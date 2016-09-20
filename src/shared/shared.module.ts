


import {NgModule,CommonModule,FormsModule} from '../utils/module.providers';
import {Nav_Component} from './nav.component';
import {breadcrumb_Component} from './path.component';
import {Footer_Component} from './footer.component';
import {routing} from './shared.routing';

@NgModule({
    imports: [CommonModule,routing],
    declarations: [Footer_Component, breadcrumb_Component, Nav_Component],
    exports: [Footer_Component, Nav_Component, breadcrumb_Component,
        CommonModule, FormsModule]
})
/**
 * 公用模块
 */
export class SharedModule { }
