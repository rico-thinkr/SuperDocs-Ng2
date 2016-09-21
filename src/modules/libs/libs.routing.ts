
import {RegisterRoute,RouterType} from '../../utils/router.providers';
import {Lib_List_Component} from './libs.list.component';
import {Lib_Create_Component} from './libs.create.component';
let list = [
    {path:'',redirectTo:'create',pathMap:`full`},
    {path:'list',component:Lib_List_Component},
    {path:'create',component:Lib_Create_Component,data: {
      title: '创建新的文件夹'
    }}

]

export const routing = RegisterRoute(list,RouterType.Child);
