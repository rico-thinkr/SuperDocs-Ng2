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
const core_1 = require('@angular/core');
class Operator {
}
exports.Operator = Operator;
class Plus_Operator extends Operator {
    constructor() {
        super();
        this._figer = "+";
    }
    getResult() {
        return this._item1 + this._item2;
    }
}
exports.Plus_Operator = Plus_Operator;
class Minus_Operator extends Operator {
    constructor() {
        super();
        this._figer = "-";
    }
    getResult() {
        return this._item1 - this._item2;
    }
}
exports.Minus_Operator = Minus_Operator;
class Multi_Operator extends Operator {
    constructor() {
        super();
        this._figer = "*";
    }
    getResult() {
        return this._item1 * this._item2;
    }
}
exports.Multi_Operator = Multi_Operator;
class Divide_Operator extends Operator {
    constructor() {
        super();
        this._figer = "/";
    }
    getResult() {
        if (this._item2 === 0)
            throw new Error('item2 is 0');
        return this._item1 / this._item2;
    }
}
exports.Divide_Operator = Divide_Operator;
class And_Operator extends Operator {
    constructor() {
        super();
        this._figer = "AND";
    }
    getResult() {
        return this._item1 && this._item2;
    }
}
exports.And_Operator = And_Operator;
class Or_Operator extends Operator {
    constructor() {
        super();
        this._figer = "OR";
    }
    getResult() {
        return this._item1 || this._item2;
    }
}
exports.Or_Operator = Or_Operator;
let OperationCollection = class OperationCollection {
    constructor() {
        this.Items = [
            new Plus_Operator(),
            new Minus_Operator(),
            new Divide_Operator(),
            new Multi_Operator(),
            new And_Operator(),
            new Or_Operator()
        ];
    }
};
OperationCollection = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], OperationCollection);
exports.OperationCollection = OperationCollection;
class SD_Function {
    execute() {
        eval(this.code);
    }
}
exports.SD_Function = SD_Function;
class Validator {
    isBool(value) {
        return true;
    }
    isString(value) {
        return true;
    }
    isDate(value) {
    }
}
exports.Validator = Validator;
