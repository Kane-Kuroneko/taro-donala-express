export const reaxel_home = reaxel( () => {
	const { store , setState } = orzMobx( {
		count : 0,
	} );
	return () => {
		
		return {
			get count() {
				return store.count;
			} ,
			setCount( count ) {
				setState( { count } );
			} ,
		};
	};
} );


import {orzMobx,} from 'reaxes';
