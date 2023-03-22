export const reaxelのsearch_express_no = reaxel( () => {
	const {store,setState} = orzMobx({
		/*用户输入单号*/
		input_express_val : null as string ,
		/*当前已查询成功的单号*/
		current_search_express_successful : null as string,
		/*快递查询信息*/
		express_detail : null ,
	});
	const {setError,setPending,pendingState} = orzPending();
	
	const [cttRqstExpressDetail] = Reaxes.contrastedCallback((expressNo:string) => {
		return Taro.request({
			url : `https://api.jisuapi.com/express/query`,
			data : {
				appkey,
				type : "auto",
				number : expressNo
			},
			method : "POST",
			success(result){
				console.log(result,11111111);
			},
			fail(error){
				console.error(error);
			},
		});
	},() => []);
	
	return () => {
		
		return {
			get STORE_search_express(){
				Reaxes.collectDeps(store);
				return store;
			},
			searchExpressNo(expressNo:string){
				cttRqstExpressDetail(() => [NaN])(expressNo);
			},
		};
	};
} );

import { appkey } from '../../../assets';
import { __test__exrepss_no } from '../../../assets/temp';


