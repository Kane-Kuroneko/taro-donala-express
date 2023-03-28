import { pathToFileURL ,fileURLToPath} from 'url';
import path from 'node:path';
import os from 'os';
import webpack from 'webpack';
import portfinder from 'portfinder';

/* reaxes目录的绝对路径,返回F:/reaxes/   */
export const obsProjectRootDir = path.join(path.dirname(fileURLToPath(import.meta.url)) , "../");

/*reaxes目录的文件路径,返回file:///F:/reaxes/     */
export const obsProjectRootFileURL = pathToFileURL(path.join(path.dirname(fileURLToPath(import.meta.url)),'../')).href

/*封装webpack回调为promise*/
export const webpack_promise = (config) => {
	return new Promise((resolve, reject) => {
		const compiler = webpack(config, (error, stats) => {
			if (error == null) {
				resolve({compiler,error,stats});
			} else if(stats.hasErrors()){
				throw  stats.toJson().errors;
			} else {
				reject({
					error,
					stats,
				});
			}
		});
	});
};

/*返回本机的ipv4局域网地址*/
export const getIPV4address = () => {
	const network = os.networkInterfaces();
	
	for (const i in network) {
		for (const val of network[i]) {
			if (val.netmask === "255.255.255.0" &&
				val.address.startsWith('192.168')
			) {
				return val.address;
			}
		}
	}
	return '127.0.0.1';
};

/*自动检查basePort的端口是否可用, 如果不可用则寻找相邻的可用端口作为wds服务器端口*/
export const getPort = (prot) => {
	portfinder.basePort = prot||8080;
	return portfinder.getPortPromise();
};

//依据正则匹配的值来反射出对应的变量名
export const reflex = (params, processer) => {
	return params.reduce((accumulator, current) => {
		processer.forEach(({ regExp, variable }) => {
			if (regExp.test(current)) {
				accumulator[variable] = current;
			}
		});
		return accumulator;
	}, {});
};
