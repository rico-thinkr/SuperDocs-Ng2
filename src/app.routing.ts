
import {RegisterRoute, RouterType} from './utils/router.providers';
import {App_Component} from './app.component';
let list = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: 'app/modules/home/home.module' }
]

export const routing = RegisterRoute(list, RouterType.Root);
