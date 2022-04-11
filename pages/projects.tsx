import { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { IProject } from "./api/types";
import projects from "./api/projects";
import Head from "next/head";
import useTitle from "../hooks/useTitle";

export const Projects: NextPage = ({ projects }: any) => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
      </Head>

      <section>
        <h2 className="text-4xl font-medium pb-8">Projects</h2>
        {projects.map((project: IProject) => (
          <Project key={project.id} projects={project} />
        ))}
      </section>
    </>
  );
};

// This gets called on every request
export const getStaticProps: GetStaticProps = async () => {
  // Pass data to the page via props
  return { props: { projects } };
};

export default Projects;
