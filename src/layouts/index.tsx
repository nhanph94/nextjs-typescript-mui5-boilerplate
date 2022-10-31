import { ReactElement } from "react";
import DefaultLayout from "src/layouts/DefaultLayout";

type AppLayoutProp = {
  children: ReactElement;
};

export { DefaultLayout };
export type AppLayout = ({ children }: AppLayoutProp) => ReactElement;
export type LayoutProps = typeof DefaultLayout;
