/*
包含n个接口函数的模块
函数的返回值：promise对象
*/
import ajax from './ajax'
//例子
//geohash为详细地址
export const reqAddress = (geohash) => ajax('/position/${geohash}');
export const reqoo = () => ajax('/position/');
//a,b为参数
export const reqaa = (a,b) => ajax('/position/',{a,b});