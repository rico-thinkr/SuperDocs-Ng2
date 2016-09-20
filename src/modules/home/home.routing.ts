
import {RegisterRoute,RouterType} from '../../utils/router.providers';
import {Home_Component} from './home.component';

let list = [
    {path:'',component:Home_Component}
]
export const routing = RegisterRoute(list,RouterType.Child);
