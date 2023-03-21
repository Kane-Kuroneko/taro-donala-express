import { Component , PropsWithChildren } from 'react';
import { View , Button , Text } from '@tarojs/components';
import { reaxel_home } from './reaxel';
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

export const Home = reaxper( class extends Reaxlass {
	
	render() {
		const {
			count ,
			setCount,
		} = reaxel_home();
		return (
			<View className = "index">
				<Button onClick = { () => setCount( count + 1 ) }>+</Button>
				<Button onClick = { () => setCount( count - 1 ) }>-</Button>
				<Text>{ count }</Text>
			</View>
		);
	}
} );
export default Home;
