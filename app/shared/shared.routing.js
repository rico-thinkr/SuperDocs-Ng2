"use strict";
const router_providers_1 = require('../utils/router.providers');
const home_component_1 = require('../modules/home/home.component');
let list = [
    { path: 'script', component: home_component_1.Home_Component, loadChildren: 'app/modules/script/script.module' },
    { path: 'lib', component: home_component_1.Home_Component, loadChildren: 'app/modules/libs/libs.module' }
];
exports.routing = router_providers_1.RegisterRoute(list, router_providers_1.RouterType.Child);
