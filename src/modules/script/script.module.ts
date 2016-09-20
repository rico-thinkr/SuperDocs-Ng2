import {NgModule,CommonModule} from '../../utils/module.providers';
import {Script_Editor_Component} from './script.component';
import {routing} from './script.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ CommonModule,routing,FormsModule ],
  declarations: [ Script_Editor_Component ],
  providers:[]
})
export default class ScriptModule {}
