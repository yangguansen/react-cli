import axios, { AxiosError } from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.timeout = 2000;
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded';

const formatParams = ( params: any = {} ): string => {
	let temp: Array<string> = [];

	if ( JSON.stringify( params ) === '{}' ) return '';

	const len = Object.keys( params ).length;
	Object.keys( params ).map( ( v, i ) => {
		temp.push( `${ v }=${ params[ v ] }` );
		if ( i + 1 < len ) {
			temp.push( '&' );
		}
		return v;
	} );

	return temp.join( '' );
};

function handleError( err: AxiosError | string ) {
	let msg = '';
	if ( err.toString().indexOf( 'timeout' ) > -1 ) {
		msg = '响应超时，请检查网络';
	} else {
		msg = '网络请求异常';
	}
	message.error( msg );
	return { status: -1, message: msg };
}

export const get = ( path: string, params?: { [ propName: string ]: any; } ): Promise<any> => {
	const paramsString = formatParams( params );
	return axios.get( `${ path }?${ paramsString }` ).then( data => data.data ).catch( handleError );
};

export const post = ( path: string, params?: { [ propName: string ]: any; } ): Promise<any> => {
	return axios.post( path, params ).then( data => data.data ).catch( handleError );
};
