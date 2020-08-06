/**
 *  定义初始状态方法
 */
const initStateFn = () => {
	return {
		count: 0
	};
};

/**
 *  初始状态
 */
export const initState = initStateFn();

/**
 *  action命名 全大写
 *  命名规则为  模块名:方法名
 */
export const ADD_COUNT = 'DEMO:ADD_COUNT';

/**
 * 数据操作，需要修改的变量
 *
 */
export const addCount = ( count: number = 0 ) => {
	return {
		type: ADD_COUNT,
		count: count + 1
	};
};