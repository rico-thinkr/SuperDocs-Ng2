"use strict";
const router_1 = require('@angular/router');
/**
 * 路由类型。
 * @type {[type]}
 */
(function (RouterType) {
    RouterType[RouterType["Root"] = 0] = "Root";
    RouterType[RouterType["Child"] = 1] = "Child";
})(exports.RouterType || (exports.RouterType = {}));
var RouterType = exports.RouterType;
/**
 * 路由注册器
 * @param  {any}                 list [路由列表]
 * @param  {RouterType}          type [类型]
 * @return {ModuleWithProviders}      [description]
 */
function RegisterRoute(list, type) {
    return type == RouterType.Root ? router_1.RouterModule.forRoot(list) : router_1.RouterModule.forChild(list);
}
exports.RegisterRoute = RegisterRoute;
