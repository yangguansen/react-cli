/**
 *	请求数据服务在此声明，页面请求接口调用此文件里的代码
 */

import { get } from '../index';
import { getVersionInput, getVersionOutput } from './type';

export const getVersion = ( params: getVersionInput ): Promise<getVersionOutput> => {
	return get( '/appapi/getVersion', params );
};