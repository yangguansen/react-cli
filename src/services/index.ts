import axios, { AxiosResponse, AxiosError } from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.timeout = 5000;
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
	if ( err.toString().indexOf( 'timeout' ) > -1 ) {
		message.error( '响应超时，请检查网络' );
	}
}

export const get = ( path: string, params?: { [ propName: string ]: any; } ): Promise<void | Object> => {
	const paramsString = formatParams( params );
	return axios.get( `${ path }?${ paramsString }` ).then( ( data: AxiosResponse ) => {
		return data;
	} ).catch( ( err: AxiosError | string ) => {
		handleError( err );
	} );
};

export const post = ( path: string, params?: { [ propName: string ]: any; } ): Promise<void | Object> => {
	return axios.post( path, params ).then( ( data: AxiosResponse ) => {
		console.log( data );
	} ).catch( ( err: AxiosError | string ) => {
		handleError( err );
	} );
};
