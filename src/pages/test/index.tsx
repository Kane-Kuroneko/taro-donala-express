export default reaxper( () => {
	
	return <>
		<View>
			<Button
				onClick = { () => {
					Taro.login().then( ( { code } ) => {
						console.log( 'code' , code );
					} ).catch( ( error ) => {
						console.error( '登录失败:' , error );
					} );
				} }
			>登录授权</Button>
		</View>
	</>;
} );


import { View , Button } from '@tarojs/components';
