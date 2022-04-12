import { GetStaticProps, NextPage } from "next";
import Project from "../components/Project";
import { IProject } from "./api/types";
import projects from "./api/projects";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";

export const Projects: NextPage = ({ projects }: any) => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.h2 className="text-4xl font-medium pb-8">Projects</motion.h2>
        {projects.map((project: IProject, index: number) => (
          <Project key={project.id} projects={project} index={index} />
        ))}
      </motion.section>
    </>
  );
};

// This gets called on every request
export const getStaticProps: GetStaticProps = async () => {
  // Pass data to the page via props
  return { props: { projects } };
};

export default Projects;
