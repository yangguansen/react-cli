import { createContext } from 'react';

type property = {
	count: number
}

const initConfig = { count: 0 };
const myContext = createContext<Partial<property>>( initConfig );
export default myContext;
export const initProperty = initConfig;
