import { Profiler } from "inspector";

export type Profile = {
  bio: string;
  email: string;
  firstName: string;
  lastName: string;
  img: string;
  github: string;
};

export type CV = {
  jobs: any;
  pages: any;
  profile: Profile;
  projects: any;
  schools: any;
  skills: any;
  social: any;
};
