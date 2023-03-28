import { Component , PropsWithChildren } from 'react';

class App extends Component<PropsWithChildren> {
	
	// this.props.children 就是要渲染的页面
	render() {
		return (
			<>
				{ this.props.children }
			</>
		);
	}
}

export default App;

import 'taro-ui/dist/style/index.scss';
