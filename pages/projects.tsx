import { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { IProject } from "./api/types";

export const Projects: NextPage = ({ projects }: any) => {
  return (
    <Layout>
      <section>
        <h2 className="text-4xl font-medium pb-8">Projects</h2>
        {projects.map((project: IProject) => (
          <Project key={project.id} projects={project} />
        ))}
      </section>
    </Layout>
  );
};

// This gets called on every request
export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { projects: data } };
};

export default Projects;
