/**
 *	数据接口的入参出参类型声明
 */

export interface getVersionInput {
	lang: string;
	appPlatform: string;
	version: string;
}

export interface getVersionOutput {
	status: number;
	version: string;
	message: string;
}