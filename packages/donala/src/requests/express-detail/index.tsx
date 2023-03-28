export const rqstExpressDetail = async( expressNo: string ) => {
	
	
	return Taro.request( {
		url : `https://api.jisuapi.com/express/query` ,
		data : {
			appkey ,
			type : "auto" ,
			number : expressNo,
		} ,
		method : "GET" ,
	} );
};

export namespace ExpressDetail {
	export type payload = {};
	
	export type response = {
		status: 0;
		msg: string;
		result: {
			/*运单号*/
			number: string;
			/*快递公司ID*/
			type: "yunda";
			/*快递公司名*/
			typename: "韵达快运";
			/*快递logo*/
			logo: "https://api.jisuapi.com/express/static/images/logo/80/yunda.png";
			/*物流信息*/
			list: Array<{time:string;status:string}>;
			/*物流状态 1在途中 2派件中 3已签收 4派送失败(拒签等)*/
			deliverystatus: 1|2|3|4;
			/**
			 * @deprecated (已弃用，请使用deliverystatus)
			 */
			issign: 0;
		};
	};
}
import { appkey } from '@@assets/jisu.asset';
