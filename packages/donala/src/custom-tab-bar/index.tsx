export default reaxper( () => {
	
	const { STORE_curstom_tab_bar,onTabbarClick } = reaxelのcustom_tab_bar();
	const { list , current } = STORE_curstom_tab_bar;
	
	
	const TabbarElements = list.map( ( {key,pagePath,text,iconType} ) => {
		const isCurrency = current === key;
		return <View
			key = { key }
			className = "tab-bar-item"
			onClick = { () => {
				onTabbarClick( key );
			} }
		>
			{/*<Image src={srcのtabbarIndex}/>*/ }
			{/*<View className='at-icon at-icon-settings'></View>*/}
			<AtIcon
				value = { iconType }
				size = "22"
				color = { isCurrency ? "#00afff" : "#919191" }
			/>
			<View style = { { fontSize : "18px" , color : isCurrency ? "#00afff" : "#919191" } }>{ text }</View>
		</View>;
	});
	
	return <>
		<View className='tab-bar'>
			<View className='tab-bar-border'></View>
			{TabbarElements}
		</View>
	</>;
} );

import './index.scss';
// import less from './index.less';
import { reaxelのcustom_tab_bar } from './reaxel';
import { View , CoverImage,Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
// import 'taro-ui/dist/style/index.scss';

