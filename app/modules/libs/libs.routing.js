"use strict";
const router_providers_1 = require('../../utils/router.providers');
const libs_list_component_1 = require('./libs.list.component');
const libs_create_component_1 = require('./libs.create.component');
let list = [
    { path: '', redirectTo: 'create', pathMap: `full` },
    { path: 'list', component: libs_list_component_1.Lib_List_Component },
    { path: 'create', component: libs_create_component_1.Lib_Create_Component, data: {
            title: '创建新的文件夹'
        } }
];
exports.routing = router_providers_1.RegisterRoute(list, router_providers_1.RouterType.Child);
