import Image from "next/image";
import classes from "./Project.module.css";

export const Project = ({ projects }: any) => {
  const technologies = projects.tech.map((tech: string) => (
    <li key={projects.id}>{tech}</li>
  ));

  return (
    <>
      <section className={classes.project}>
        <Image
          className={classes.projectImage}
          src={projects.image}
          width={400}
          height={280}
          objectFit="contain"
        />
        <div className="w-full sm:w-2/5">
          <h3 className="text-3xl py-4">{projects.name}</h3>
          <p className="text-xl pb-4">{projects.description}</p>
          <ul className="font-thin text-lg opacity-80">{technologies}</ul>
        </div>
      </section>
    </>
  );
};
