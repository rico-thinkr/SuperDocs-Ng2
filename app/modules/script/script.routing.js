"use strict";
const router_providers_1 = require('../../utils/router.providers');
const script_component_1 = require('./script.component');
let list = [
    { path: '', component: script_component_1.Script_Editor_Component }
];
exports.routing = router_providers_1.RegisterRoute(list, router_providers_1.RouterType.Child);
