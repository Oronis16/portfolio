import { Box } from "@chakra-ui/react";
import projects from "../../src/projects.json";

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }) {
  return <Box>{project.name}</Box>;
}
