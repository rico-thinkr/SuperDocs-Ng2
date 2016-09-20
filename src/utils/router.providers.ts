import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule }  from '@angular/router';
/**
 * 路由类型。
 * @type {[type]}
 */
export enum RouterType{Root,Child}
/**
 * 路由注册器
 * @param  {any}                 list [路由列表]
 * @param  {RouterType}          type [类型]
 * @return {ModuleWithProviders}      [description]
 */
export function RegisterRoute(list:any,type:RouterType):ModuleWithProviders{
        return type==RouterType.Root?RouterModule.forRoot(list):RouterModule.forChild(list);
}
