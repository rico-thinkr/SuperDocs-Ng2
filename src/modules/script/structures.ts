

import {Injectable} from '@angular/core';

export class Operator {
    _item1: any;
    _item2: any;
    _figer: string;
}


export class Plus_Operator extends Operator {
    constructor() {
        super();
        this._figer = "+";
    }
    getResult() {
        return this._item1 + this._item2;
    }
}
export class Minus_Operator extends Operator {
    constructor() {
        super();
        this._figer = "-";
    }
    getResult() {
        return this._item1 - this._item2;
    }
}
export class Multi_Operator extends Operator {
    constructor() {
        super();
        this._figer = "*";
    }
    getResult() {
        return this._item1 * this._item2;
    }
}
export class Divide_Operator extends Operator {
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

export class And_Operator extends Operator {
    constructor() {
        super();
        this._figer = "AND";
    }
    getResult() {
        return this._item1 && this._item2
    }
}

export class Or_Operator extends Operator {
    constructor() {
        super();
        this._figer = "OR";
    }
    getResult() {
        return this._item1 || this._item2
    }
}

@Injectable()
export class OperationCollection {
    Items: Array<Operator> = [
        new Plus_Operator(),
        new Minus_Operator(),
        new Divide_Operator(),
        new Multi_Operator(),
        new And_Operator(),
        new Or_Operator()
    ];

}


export class SD_Function {
    /**
     * code snippt
     * @type {string}
     */
    code: string;

    name: string;

    execute() {
        eval(this.code);
    }



}




export class Validator{

    isBool(value:any){
        return true;
    }

    isString(value:any){
        return true;
    }

    isDate(value:any){

    }
}
