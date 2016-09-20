
/**
 *
 */
import {NgComponent,NgInput} from '../../utils/component.providers';
import {SD_Function,OperationCollection} from './structures';
@NgComponent({
    selector:`script-editor`,
    template:`
    <div class="col-lg-4">
            
    </div>
    <div class="col-lg-4" *ngIf="func" >
        <div className="form-group">
            <input type ="text" placeholder='function name' class='form-control' [(ngModel)]="func.name"  name="function-name"/>
        </div>
        <div className="form-group">
            <select class='form-control'>
                <option *ngFor='let op of _operators.Items'>{{op._figer}}</option>
            </select>
        </div>
    </div>
    <div class="col-lg-4">
        <pre class="language-javascript"><code class="language-javascript">{{func.code}}</code></pre>
    </div>

`,
providers:[OperationCollection]
})
export class Script_Editor_Component{
    constructor(private _operators:OperationCollection){

    }

    func:SD_Function=new SD_Function();
    ngOnInit() {
        this.func.name="abcde";
        this.func.code = `function ${this.func.name}(){
    alert("hello world");
}`


    }
    showName(){
        console.log(this.func.name);
    }
}
