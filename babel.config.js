const AutoImportPlugin = require('./architecture/babel-plugins/babel-plugin-auto-import');
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
	presets : [
		[
			'taro' ,
			{
				framework : 'react' ,
				ts : true ,
			} ,
		] ,
	] ,
	plugins : [
		[
			AutoImportPlugin ,
			{
				declarations : [
					{
						path : "@tarojs/taro",
						namespace : "Taro",
					},
					{
						path : "react" ,
						members : [
							"useState",
							"useEffect",
							"useLayoutEffect",
							"useRef",
							"useMemo",
							"useContext" ,
							"useReducer" ,
							"useCallback",
						] ,
						default : "React" ,
					} ,
					{
						path : "reaxes-react" ,
						members : ["Reaxlass","reaxper","orzMobx","Reaxes","reaxel"] ,
					} ,
					{
						path : "reaxes-utils" ,
						members : ["orzPromise","crayon"] ,
						namespace : "utils",
					} ,
					{
						path : "reaxes-toolkit" ,
						members : ["orzPending"] ,
						namespace : "toolkit",
						
					} ,
				] ,
			} ,
		] ,
	] ,
};
