

export const reaxelのexpress_detail = reaxel(() => {
	let ret;
	const {store,setState} = orzMobx( {
		/*用户输入单号*/
		input_express_val : "" ,
		/*快递查询信息*/
		express_detail :  [] as expressDetailItem[] ,
		/*查询状态 "success" | "fail"*/
		status : null,
		/**
		 * 当前查询完成的单号,只要请求完成,无论成功失败都写入这个状态
		 * 与input_express_val的实时写入状态不同,当点击搜索按钮发出请求的finally里写入这个expressNo,
		 */
		expressNo : null,
		error_msg : null as string,
	} );
	
	const [cttRqstExpressDetail] = Reaxes.contrastedCallback(async (expressNo:string) => {
		if(pending.pendingState.pending){
			return ;
		}
		pending.setPending(true);
		const resultPromise = rqstExpressDetail(expressNo);
		resultPromise.then(({data}) => {
			crayon.green('rqstExpressDetail',data);
			if(data.status!==0){
				throw data;
			}
			setState({
				express_detail : data.result.list,
				expressNo : store.input_express_val,
			});
			pending.setPending(false);
			pending.setError(false);
		}).catch((e) => {
			console.error(e);
			pending.setPending(false);
			pending.setError(true);
			setState({
				error_msg:e.msg,
				express_detail : [],
				expressNo : store.input_express_val,
			});
		})
		return resultPromise;
	},() => []);
	
	const pending = orzPending();
	
	
	return () => {
		
		return ret = {
			get store$express_detail(){
				return store;
			},
			get pendingState(){
				return pending.pendingState;
			},
			setState$express_detail:setState,
			setError(err:boolean){
				return pending.setError( err );
			},
			setPending(_pending:boolean){
				return pending.setPending(_pending );
			},
			/*用单号查询快递信息*/
			rqstExpressDetail(){
				cttRqstExpressDetail(() => [store.input_express_val])(store.input_express_val);
			},
			setExpressNo(expressNo){
				setState( { expressNo } );
			},
		};
	};
});



import { appkey } from '@@assets/jisu.asset';
import { rqstExpressDetail } from '@@requests';

export namespace expressInfo {
	export type pending = "true"|"false"|"error";
};

export type expressDetailItem = {
	time:string;
	status : string;
};
