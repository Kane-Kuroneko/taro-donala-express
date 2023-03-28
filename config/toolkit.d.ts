export function reflex<A extends string[],P extends Array<{
	regExp : RegExp,
	readonly variable  ,
}>>(args:A,processer:P) :{
	[p in ArrayElement<P>["variable"]]: string;
};

export const obsProjectRootDir:string;
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
