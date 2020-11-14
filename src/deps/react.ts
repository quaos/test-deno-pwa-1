export { default as React } from "https://esm.sh/[react,react-dom]/react?dev&no-check";

//HACK: Fix missing React.FC
import { default as _React } from "https://esm.sh/[react,react-dom]/react?dev&no-check";
export type ReactFC<T> = (props: _React.PropsWithChildren<T>) => _React.Element;

//export const React = _React;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
