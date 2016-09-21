"use strict";
const router_providers_1 = require('./utils/router.providers');
let list = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: 'app/modules/home/home.module' }
];
exports.routing = router_providers_1.RegisterRoute(list, router_providers_1.RouterType.Root);
