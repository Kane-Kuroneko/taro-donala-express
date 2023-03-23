export default reaxper( () => {
	
	const { STORE_curstom_tab_bar,onTabbarClick } = reaxelのcustom_tab_bar();
	const { list , current } = STORE_curstom_tab_bar;
	
	
	const TabbarElements = list.map( ( {key,pagePath,iconPath,selectedIconPath,text,} ) => {
		return <CoverView
			key = { key }
			className='tab-bar-item'
			onClick = { () => {
				onTabbarClick(key);
			} }
		>
			{/*<View className='at-icon at-icon-settings'></View>*/}
			<AtIcon value='clock' size='22' color='#F00'></AtIcon>
			<CoverView style = { { fontSize : "22px" , color : current === key ? "blue" : "gray" } }>{ text }</CoverView>
		</CoverView>;
	});
	
	return <>
		<CoverView className='tab-bar'>
			<CoverView className='tab-bar-border'></CoverView>
			{TabbarElements}
		</CoverView>
	</>;
} );

import './index.scss';
import srcのtabbarIndex from '../assets/tabbarIndex.svg';
import srcのtabbarIndexSelected from '../assets/tabbar-index-selected.svg';
// import less from './index.less';
import { reaxelのcustom_tab_bar } from './reaxel';
import { CoverView , CoverImage,Image ,View} from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import 'taro-ui/dist/style/index.scss';
