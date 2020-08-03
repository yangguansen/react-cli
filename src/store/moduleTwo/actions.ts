/**
 *  定义初始状态方法
 */
const initStateFn = () => {
	return {
		count2: 0
	};
};

/**
 *  初始状态
 */
export const initState = initStateFn();

/**
 *  action命名  全大写
 *  命名规则为  模块名:方法名
 */
export const DECREASE_COUNT = 'MODULE_TWO:DECREASE_COUNT';

/**
 * 数据操作，需要修改的变量
 *
 */
export const decreaseCount = ( count: number = 0 ) => {
	return {
		type: DECREASE_COUNT,
		count: count - 1
	};
};