import * as Modules from '../../utils/module.providers';
import {SharedModule} from '../../shared/shared.module';
import {Home_Component} from './home.component';
import {routing} from './home.routing';
@Modules.NgModule({
    imports:[Modules.CommonModule,SharedModule,routing],
    declarations:[Home_Component]
})
export default class HomeModule{

}
