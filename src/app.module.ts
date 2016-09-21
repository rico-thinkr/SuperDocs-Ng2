

import * as Modules from './utils/module.providers';
import {App_Component} from './app.component';
import {routing} from './app.routing';

@Modules.NgModule({
    imports:[Modules.BrowserModule,routing,Modules.HttpModule],
    declarations:[App_Component],
    bootstrap:[App_Component]
})
export class AppModule{

}
