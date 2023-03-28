import path from 'node:path';
import {obsProjectRootDir} from './toolkit';
import {pkg} from './entrence';

const obsPkgRoot = path.join(obsProjectRootDir,"packages",pkg);
const config = {
	projectName : 'taro-donala-express' ,
	date : '2023-3-8' ,
	alias: {
		'#root' : obsProjectRootDir,
		'--Components--': path.join(obsPkgRoot,'src/--Components--'),
		'@@assets' : path.join(obsPkgRoot,'src/assets'),
		'@@pages' : path.join(obsPkgRoot,'src/pages'),
		'@@reaxels' : path.join(obsPkgRoot,'src/reaxels'),
		'@@requests' : path.join(obsPkgRoot,'src/requests'),
		
	},
	designWidth : 750 ,
	deviceRatio : {
		640 : 2.34 / 2 ,
		750 : 1 ,
		828 : 1.81 / 2,
	} ,
	sourceRoot : `packages/${pkg}/src/` ,
	// sourceRoot : path.join(obsPkgRoot,'src') ,
	outputRoot : path.join(obsProjectRootDir,`${pkg}.dist`) ,
	// outputRoot : 'dist' ,
	plugins : [] ,
	defineConstants : {} ,
	copy : {
		patterns : [] ,
		options : {},
	} ,
	framework : 'react' ,
	compiler : 'webpack5' ,
	cache : {
		enable : false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
	} ,
	mini : {
		postcss : {
			pxtransform : {
				enable : true ,
				config : {},
			} ,
			url : {
				enable : true ,
				config : {
					limit : 1024, // 设定转换尺寸上限
				},
			} ,
			cssModules : {
				enable : false , // 默认为 false，如需使用 css modules 功能，则设为 true
				config : {
					namingPattern : 'module' , // 转换模式，取值为 global/module
					generateScopedName : '[name]__[local]___[hash:base64:5]',
				},
			},
		},
	} ,
	h5 : {
		publicPath : '/' ,
		staticDirectory : 'static' ,
		postcss : {
			autoprefixer : {
				enable : true ,
				config : {},
			} ,
			cssModules : {
				enable : false , // 默认为 false，如需使用 css modules 功能，则设为 true
				config : {
					namingPattern : 'module' , // 转换模式，取值为 global/module
					generateScopedName : '[name]__[local]___[hash:base64:5]',
				},
			},
		},
	},
};
export default function (merge) {
	if ( process.env.NODE_ENV === 'development' ) {
		return merge({} , config , require('./dev'));
	}
	return merge({} , config , require('./prod'));
};
