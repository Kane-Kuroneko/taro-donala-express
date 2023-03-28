import { Component , PropsWithChildren } from 'react';
import { View , Button , Text , PageContainer , Navigator } from '@tarojs/components';
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
export default reaxper( () => {
	
	// useEffect( () => {
	// 	Taro.navigateTo({ url : "../index/index"})
	// } , [] );
	return <View onClick = { () => {
		Taro.navigateTo( { url : "../index/index" } );
	} }>
		Home
	</View>;
} );
