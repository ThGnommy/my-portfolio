import styles from "./Project.module.css";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { motion } from "framer-motion";
import { IProject } from "../../pages/api/types";

interface ProjectProps {
  projects: IProject;
  index: number;
}

export const Project = ({ projects, index }: ProjectProps) => {
  const technologies = projects.tech.map((tech: string) => (
    <li key={uuidv4()}>{tech}</li>
  ));

  return (
    <>
      <motion.section
        className={styles.project}
        style={{backgroundImage: `url('${projects.image}')`}}
        key={projects.name}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3 * index,
            duration: 0.5,
            x: { type: "spring", stiffness: 70 },
          },
        }}
        exit={{ opacity: 0, x: 0, transition: { duration: 0.2 } }}
      >
        <section className="dark:text-primary text-primary">
          <h3 className="text-2xl sm:text-3xl py-2 sm:py-4 underline">{projects.name}</h3>
          <p className="text-lg sm:text-xl pb-2 sm:pb-4">{projects.description}</p>
          <ul className="hidden sm:block font-thin text-lg pb-4">{technologies}</ul>
          <div className={styles.projectLinks}>
            {projects.website_link && (
              <Link href={projects.website_link} target="_blank">
                Website
              </Link>
            )}
            <Link href={projects.github_link} target="_blank">
              Github
            </Link>
          </div>
        </section>
      </motion.section>
    </>
  );
};
