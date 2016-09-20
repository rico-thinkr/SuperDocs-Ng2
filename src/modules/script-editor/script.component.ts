
/**
 *
 */
import {Component,Input} from '@angular/core';
import {TreeView} from '../../ui-elements/treeview/treeview';
import {TreeNode} from '../../ui-elements/treeview/treenode';
import {SD_Function} from './structures/base-function';
import {OperationCollection} from './structures/operator';
@Component({
    selector:`script-editor`,
    template:`
    <div class="col-lg-4">
            <tree-view [nodes]="nodes"></tree-view>
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
directives:[TreeView],
providers:[OperationCollection]
})
export class Script_Editor_Component{
    constructor(private _operators:OperationCollection){

    }

    nodes: Array<TreeNode> = [];
    func:SD_Function=new SD_Function();
    ngOnInit() {
        this.func.name="abcde";
        this.func.code = `function ${this.func.name}(){
    alert("hello world");
}`
        var n1 = new TreeNode();
        n1.tag = this.func;

        this.nodes.push(n1);



    }
    showName(){
        console.log(this.func.name);
    }
}
