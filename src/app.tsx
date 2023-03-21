import { Component , PropsWithChildren } from 'react';

import * as reaxReact from 'reaxes-react';

console.log(reaxReact);

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
