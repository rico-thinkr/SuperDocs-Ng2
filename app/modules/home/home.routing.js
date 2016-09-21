"use strict";
const router_providers_1 = require('../../utils/router.providers');
const home_component_1 = require('./home.component');
let list = [
    { path: '', component: home_component_1.Home_Component }
];
exports.routing = router_providers_1.RegisterRoute(list, router_providers_1.RouterType.Child);
