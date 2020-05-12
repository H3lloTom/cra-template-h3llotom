/// <reference types="react-scripts" />

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '@loadable/component' {
  const loadable = (dynamicImport: any): any => {};
  export default loadable;
}

declare module 'uuid';

declare const ICON_FONT_URI;
