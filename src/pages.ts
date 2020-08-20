import HomePage from "./features/Home";
import AboutPage from "./features/About";
import ReposPage from "./features/Github";

export type Page = {
  title: string;
  path?: string;
  component: any;
  exact?: boolean;
  showInMenu?: boolean;
};

export const pages: Page[] = [
  {
    title: "Home",
    path: "/",
    component: HomePage,
    exact: true,
    showInMenu: false,
  },
  {
    title: "About",
    path: "/about",
    component: AboutPage,
    exact: true,
    showInMenu: true,
  },
  {
    title: "Github",
    path: "/repos",
    component: ReposPage,
    exact: true,
    showInMenu: true,
  },
];
