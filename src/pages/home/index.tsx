import { Component , PropsWithChildren } from 'react';
import { View , Button , Text , PageContainer , Navigator } from '@tarojs/components';
import './index.less';

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
	
	useEffect( () => {
		Taro.navigateTo({ url : "../test/index"})
	} , [] );
	return <View onClick = { () => {Taro.navigateTo( { url : "../test/index" } );} }>
		Home
	</View>;
} );
