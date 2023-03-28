/**
 * 底部导航栏
 */
export const reaxelのcustom_tab_bar = reaxel( () => {
	const { store , setState } = orzMobx( {
		current : "index" as tabbarKeyEnum ,
		list : [
			{
				key : "index" as const ,
				pagePath : '/pages/index/index' ,
				iconType : "home",
				// selectedIconPath : tabBarIndexSelectedSVG ,
				// iconPath : tabBarIndexSVG ,
				text : '查快递' ,
			} ,
			{
				key : "profile" as const ,
				pagePath : '/pages/profile/index' ,
				iconType : "user",
				// selectedIconPath : tabBarIndexSelectedSVG ,
				// iconPath : tabBarIndexSVG ,
				text : '我的' ,
			} ,
		] ,
	} );
	return () => {
		
		return {
			get STORE_curstom_tab_bar() {
				return store;
			} ,
			/*选择tabbar*/
			onTabbarClick( key: tabbarKeyEnum ) {
				if(key !== store.current){
					const target = store.list.find((item) => item.key === key);
					
					Taro.switchTab( { url : target.pagePath } ).then( () => {
						setState( { current : key } );
					} );
					
					// Taro.navigateTo( { url:target.pagePath } ).then( () => {
					// 	setState({current:key});
					// } );
				}
			} ,
		};
	};
} );


export type tabbarKeyEnum = "index"|"profile";
