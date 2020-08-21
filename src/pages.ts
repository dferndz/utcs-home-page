import AboutPage from "./features/About";
import ReposPage, { SingleRepoContainer } from "./features/Github";

export type Page = {
  title: string;
  path?: string;
  component: any;
  exact?: boolean;
  showInMenu?: boolean;
};

export const pages: Page[] = [
  {
    title: "About",
    path: "/",
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
  {
    title: "Repository",
    path: "/repos/:user/:repo",
    component: SingleRepoContainer,
    exact: true,
  },
];
