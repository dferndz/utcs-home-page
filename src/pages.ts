import HomePage from "./features/Home";

export type Page = {
  title: string;
  path: string;
  component: any;
  exact: boolean;
};

export const pages: Page[] = [
  {
    title: "Home page",
    path: "",
    component: HomePage,
    exact: true,
  },
];
