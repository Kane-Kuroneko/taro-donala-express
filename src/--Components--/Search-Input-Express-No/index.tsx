export const SearchInputExpressNo = reaxper(() => {
	
	const {
		store$express_detail ,
		setState$express_detail,
		rqstExpressDetail ,
		setExpressNo ,
		pendingState
	} = reaxelのexpress_detail();
	
	useEffect(() => {
		setState$express_detail( { input_express_val : '433127035553389' } );
		rqstExpressDetail();
	},[])
	
	return <>
		<View>
			<Input style={{display:"none"}}/>
			<AtInput
				name = "xxx"
				placeholder = "输入单号"
				clear
				value = { store$express_detail.input_express_val }
				onChange = { ( value , event ) => {
					setState$express_detail( { input_express_val : value as string } );
					if(!value){
						setState$express_detail({express_detail:[]});
					}
					// return value;
				} }
			>
				<AtButton
					onClick = { () => {
						rqstExpressDetail();
					} }
					customStyle = { {
						margin : "0 12px" ,
						width : "120px" ,
					} }
				>
					查询
				</AtButton>
			</AtInput>
		</View>
	</>;
	
	
	// return <Button
	// 	onClick = { () => {
	// 		rqstExpressNo(__test__exrepss_no);
	// 	} }
	// >
	// 	查询快递单号
	// </Button>;
});

import { reaxelのexpress_detail } from '@@reaxels';
import { Button , View,Input } from '@tarojs/components';
import {AtInput,AtButton,} from "taro-ui";
import { __test__exrepss_no } from '../../assets/temp';
