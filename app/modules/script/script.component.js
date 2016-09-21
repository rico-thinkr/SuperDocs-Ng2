"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 *
 */
const component_providers_1 = require('../../utils/component.providers');
const structures_1 = require('./structures');
let Script_Editor_Component = class Script_Editor_Component {
    constructor(_operators) {
        this._operators = _operators;
        this.func = new structures_1.SD_Function();
    }
    ngOnInit() {
        this.func.name = "abcde";
        this.func.code = `function ${this.func.name}(){
    alert("hello world");
}`;
    }
    showName() {
        console.log(this.func.name);
    }
};
Script_Editor_Component = __decorate([
    component_providers_1.NgComponent({
        selector: `script-editor`,
        template: `
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
        providers: [structures_1.OperationCollection]
    }), 
    __metadata('design:paramtypes', [structures_1.OperationCollection])
], Script_Editor_Component);
exports.Script_Editor_Component = Script_Editor_Component;
