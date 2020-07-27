import { createContext } from 'react';

const initConfig = { count: 0 };
const myContext = createContext<Partial<{count: number}>>( initConfig );
export default myContext;
export const initProperty = initConfig;
