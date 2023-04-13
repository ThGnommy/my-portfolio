import { GetStaticProps, NextPage } from "next";
import { IProject, IProjectList } from "./api/types";
import projects from "./api/projects";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
import { Project } from "../components/Project/Project";
import { Fab } from "../components/Fab/Fab";
import { InView } from "react-intersection-observer";

export const Projects: NextPage<IProjectList> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>
      <motion.section>
        <InView>
          {({ inView, ref }) => (
            <>
              <motion.h2
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="text-4xl font-medium pb-8"
              >
                Projects
              </motion.h2>
              <Fab show={inView} />
            </>
          )}
        </InView>

        {projects.main.map(
          (project: IProject, index: number) =>
            project.type === "mobile" && (
              <Project key={project.id} projects={project} index={index} />
            )
        )}
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
