/**
 *  定义初始状态方法
 */
const initStateFn = () => {
	return {
		activeTab: '/UseState',
		tabArray: []
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
export const SET_ACTIVE = 'TAB:SET_ACTIVE';
export const SET_TAB_ARRAY = 'TAB:SET_TAB_ARRAY';

/**
 * 数据操作，需要修改的变量
 *
 */
export const setActive = ( tab: string = '/UseState' ) => {
	return {
		type: SET_ACTIVE,
		activeTab: tab
	};
};

export const setTabArray = ( tab: string[] ) => {
	return {
		type: SET_TAB_ARRAY,
		tabArray: tab
	};
};