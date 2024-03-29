export interface IProject {
  id: number;
  name: string;
  description: string;
  tech: string[];
  image: string;
  website_link?: string;
  github_link: string;
  type?: "web" | "mobile";
}

export interface IProjectList {
  projects: { main: IProject[]; other: IProject[] };
}
