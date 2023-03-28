import { Component , PropsWithChildren } from 'react';
import { View , Button , Text , PageContainer } from '@tarojs/components';
import less from './index.less';

// type PageStateProps = {
// 	store: {
// 		counterStore: {
// 			counter: number,
// 			increment: Function,
// 			decrement: Function,
// 			incrementAsync: Function
// 		}
// 	}
// }
const { store , setState } = orzMobx( { show : true } );
import { SearchInputExpressNo } from '--Components--/Search-Input-Express-No';
import { reaxelのexpress_detail } from '@@reaxels';

export const Home = reaxper( () => {
	const { store$express_detail , pendingState, } = reaxelのexpress_detail();
	
	
	return <View
		style={{
			display : "flex",
			
		}}
	>
		<View
			style = { {
				width : "100%"
			} }
		>
			<SearchInputExpressNo />
			{ pendingState.pending ? "请求中,请稍候" : pendingState.error ? `出错咯:${store$express_detail.error_msg}` :<ExpressRoadmap /> }
			
		</View>
		
	</View>;
	
	return <>
		{/*<View onClick = { () => {setState( { show : true } );} }>dddddddddddddddd</View>*/}
		
		<PageContainer
			show = { store.show }
			position = "center"
			onBeforeLeave = { () => {
				/*必须加这一行,多sb的bug*/
				setState( { show : false } );
				Taro.showModal( {
					title : "确定要离开吗?" ,
					showCancel : true ,
					success( res ) {
						console.log( res );
						if( res.confirm ) {
							setState( { show : false } );
						} else if( res.cancel ) {
							setState( { show : true } );
						}
					} ,
					
				} );
			} }
		>
			
		</PageContainer>
	</>;
} );

import {} from '@tarojs/components';
import 'taro-ui/dist/style/components/icon.scss';
import { ExpressRoadmap } from '--Components--/Express-Roadmap';
import { AtIcon , AtLoadMore } from 'taro-ui';

export default Home;
