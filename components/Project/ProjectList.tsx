import React from "react";
import { Project } from "./Project";
import { IProject, IProjectList } from "../../pages/api/types";
import { motion } from "framer-motion";

export const ProjectList = ({ projects }: IProjectList) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2, staggerChildren: 0.5 } }}
    >
      {projects.main.map((project: IProject, index: number) => (
        <Project key={project.id} projects={project} index={index} />
      ))}
    </motion.div>
  );
};
