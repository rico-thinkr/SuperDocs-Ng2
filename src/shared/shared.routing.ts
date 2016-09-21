
import {RegisterRoute,RouterType} from '../utils/router.providers';
import {Home_Component} from '../modules/home/home.component';

let list = [
    {path:'script',component:Home_Component,loadChildren:'app/modules/script/script.module'},
    {path:'lib',component:Home_Component,loadChildren:'app/modules/libs/libs.module'}

]
export const routing = RegisterRoute(list,RouterType.Child);
