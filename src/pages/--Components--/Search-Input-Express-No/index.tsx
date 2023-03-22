export const SearchInputExpressNo = reaxper(() => {
	
	const { searchExpressNo } = reaxelのsearch_express_no();
	
	return <Button
		onClick = { () => {
			searchExpressNo(__test__exrepss_no);
		} }
	>
		查询快递单号
	</Button>;
});
import { reaxelのsearch_express_no } from './reaxel';
import { Button , View } from '@tarojs/components';
import { __test__exrepss_no } from '../../../assets/temp';
