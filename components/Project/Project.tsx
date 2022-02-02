import Image from "next/image";
import styles from "./Project.module.css";
import { v4 as uuidv4 } from "uuid";
import ImageWrapper from "../Utils/ImageWrapper/ImageWrapper";
import Link from "next/link";

export const Project = ({ projects }: any) => {
  const technologies = projects.tech.map((tech: string) => (
    <li key={uuidv4()}>{tech}</li>
  ));

  return (
    <>
      <section className={styles.project}>
        <ImageWrapper>
          <Image
            src={projects.image}
            width={400}
            height={280}
            objectFit="cover"
            quality={50}
            alt="project-image"
          />
        </ImageWrapper>
        <div className="max-w-[20rem] csm:w-2/5">
          <h3 className="text-3xl py-4">{projects.name}</h3>
          <p className="text-xl pb-4">{projects.description}</p>
          <ul className="font-thin text-lg opacity-80 pb-4">{technologies}</ul>
          <div className={styles.projectLinks}>
            <Link href={projects.website_link}>
              <a target="_blank">Website</a>
            </Link>
            <Link href={projects.github_link}>
              <a target="_blank">Github</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
