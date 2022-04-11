import Image from "next/image";
import styles from "./Project.module.css";
import { v4 as uuidv4 } from "uuid";
import ImageWrapper from "../Utils/ImageWrapper/ImageWrapper";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const Project = ({ projects, index }: any) => {
  const technologies = projects.tech.map((tech: string) => (
    <li key={uuidv4()}>{tech}</li>
  ));

  return (
    <>
      <AnimatePresence>
        <motion.section
          className={styles.project}
          key={projects.name}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2 * index,
              duration: 0.7,
              x: { type: "spring", stiffness: 50 },
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <ImageWrapper>
            <Image
              src={projects.image}
              width={400}
              height={280}
              objectFit={"cover"}
              quality={45}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
              alt="project-image"
            />
          </ImageWrapper>
          <div className="max-w-[20rem] csm:w-2/5">
            <h3 className="text-3xl py-4">{projects.name}</h3>
            <p className="text-xl pb-4">{projects.description}</p>
            <ul className="font-thin text-lg opacity-80 pb-4">
              {technologies}
            </ul>
            <div className={styles.projectLinks}>
              <Link href={projects.website_link}>
                <a target="_blank">Website</a>
              </Link>
              <Link href={projects.github_link}>
                <a target="_blank">Github</a>
              </Link>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};
