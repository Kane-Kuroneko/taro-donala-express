/**
 *
 */

export const ExpressRoadmap = reaxper( () => {
	
	
	const {
		setExpressNo,
		rqstExpressDetail,
		pendingState,
		setPending , 
		setState$express_detail,
		store$express_detail , 
		setError
	} = reaxelのexpress_detail();
	
	return <>
		<ScrollView
			enhanced
			showScrollbar
			scrollY = { true }
			style = { {
				width : "360px" ,
				height : "500px" ,
				margin : "24px auto" ,
			} }
		>
			<AtTimeline
				pending = { true }
				items = { (store$express_detail.express_detail.concat(store$express_detail.express_detail)).map( ( { status , time } ) => (
					{ title : time , content : [ status ]  }
				) ) }
			/>
		</ScrollView>
	</>;
	
} );

crayon.blue( '433127035553389' );
import { reaxelのexpress_detail } from '@@reaxels';
import {View , ScrollView} from '@tarojs/components';
import {AtTimeline,AtIcon} from 'taro-ui';
