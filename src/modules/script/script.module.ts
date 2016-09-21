import {NgModule,CommonModule,FormsModule} from '../../utils/module.providers';
import {Script_Editor_Component} from './script.component';
import {routing} from './script.routing';

@NgModule({
  imports:      [ CommonModule,routing,FormsModule ],
  declarations: [ Script_Editor_Component ]
})
export default class ScriptModule {}
