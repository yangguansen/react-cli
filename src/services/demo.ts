import { get } from './index';

interface versionParams {
	lang: string;
	appPlatform: string;
	version: string;
}

export const getVersion = ( params: versionParams ) => {
	return get( '/appapi/getVersion', params );
};
