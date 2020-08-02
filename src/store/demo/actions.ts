export const ADD_COUNT = 'ADD_COUNT';

/**
 * 数据操作，需要修改的变量
 *
 */
export const addCount = ( count: number = 0 ) => {
	return {
		type: ADD_COUNT,
		count: count
	};
};