import { GetServerSideProps, GetStaticProps, NextPage } from "next";
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
export const getServerSideProps: GetServerSideProps = async () => {
  let data_url =
    process.env.NODE_ENV === "production"
      ? "http://www.thomasbrandoli.dev/api/data"
      : "http://localhost:3000/api/data";

  // Fetch data from external API
  const res = await fetch(data_url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { projects: data } };
};

export default Projects;
