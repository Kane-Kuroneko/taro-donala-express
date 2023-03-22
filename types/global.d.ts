/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace JSX {
    interface IntrinsicElements {
        'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
    }
}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}


declare const _ : typeof import('lodash');
declare const React: typeof import('react');
declare const {
   useState ,
   useEffect ,
   useLayoutEffect ,
   useRef ,
   useMemo ,
   useContext ,
   useReducer ,
   useCallback,
}: typeof React;
declare const {orzMobx,Reaxes,reaxel} : typeof import("reaxes");
declare const {reaxper,Reaxlass} : typeof import("reaxes-react");
declare const utils:typeof import("reaxes-utils");
declare const {crayon,orzPromise} : typeof utils;
declare const toolkit:typeof import('reaxes-toolkit');
declare const {orzPending} : typeof toolkit;
declare const Taro: typeof import("@tarojs/taro");

