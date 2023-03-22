import { Component , PropsWithChildren } from 'react';
import { View , Button , Text , PageContainer } from '@tarojs/components';
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
const {store,setState} = orzMobx( { show : true } );
import { SearchInputExpressNo } from '../--Components--/Search-Input-Express-No';
export const Home = reaxper( class extends Reaxlass {
	
	render() {
		return <>
			<View onClick = { () => {setState({show:true})} }>dddddddddddddddd</View>
			
			<PageContainer
				show = { store.show }
				position = "bottom"
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
								setState( { show : true } )
							}
						} ,
						
					} );
				} }
			>
				<View className = "index">
					<SearchInputExpressNo />
					
					<Button
						onClick = { () => {
							setState( { show : false } );
						} }
					>hide</Button>
				</View>
			</PageContainer>
		</>;
	}
} );
export default Home;