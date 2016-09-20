
import {RegisterRoute,RouterType} from '../../utils/router.providers';
import {Script_Editor_Component} from './script.component';
let list = [
    {path:'',component:Script_Editor_Component}
]

export const routing = RegisterRoute(list,RouterType.Child);
