export default defineAppConfig( {
	pages : [
		// 'pages/home/index' ,
		'pages/index/index' ,
		'pages/profile/index' ,
		'pages/test/index' ,
	] ,
	window : {
		backgroundTextStyle : 'light' ,
		navigationBarBackgroundColor : '#ffffff' ,
		navigationBarTitleText : 'WeChat' ,
		navigationBarTextStyle : 'black' ,
	} ,
	tabBar : {
		"custom" : true ,
		"color" : "#000000" ,
		"selectedColor" : "#000000" ,
		"backgroundColor" : "#000000" ,
		"list" : [
			{
				"pagePath" : "pages/index/index" ,
				"text" : "" ,
			} , 
			{
				"pagePath" : "pages/profile/index" ,
				"text" : "" ,
			} ,
		] ,
	} ,
	"usingComponents": {}
} );
