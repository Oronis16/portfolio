import {
  Flex,
  Box,
  Circle,
  Spacer,
  useColorMode,
  useColorModeValue,
  Link,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import projects from "../../src/projects.json";
import { FaGithub } from "react-icons/fa";

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
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
  const circleBG = useColorModeValue("brandDark.primary", "white");
  const highlightColor = useColorModeValue(
    "brandLight.secondaryText",
    "brandDark.secondaryText"
  );
  const carBG = useColorModeValue("white", "brandDark.secondary");
  const projectArray = project.technologies;
  const imageArray = project.image;
  return (
    <Box bg={bg} h="100%">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
      </style>
      <Flex mx="30px" mb="10px">
        <Box>
          <Box
            as="button"
            fontSize="36px"
            fontWeight="light"
            fontFamily="poppins"
            letterSpacing="3px"
          >
            <NextLink href="/">Andreyka Krisztina</NextLink>
          </Box>
        </Box>
        <Spacer />
        <Circle
          mt="15px"
          mr="10px"
          size="20px"
          bg={circleBG}
          onClick={toggleColorMode}
        ></Circle>
        <Box>
          {/*<Box
            as="button"
            fontSize="24px"
            fontWeight="regular"
            fontFamily="poppins"
            mr="15px"
            p="2"
          >
            <Link href="/about">
              <a>About</a>
            </Link>
          </Box>*/}
          <Box
            as="button"
            fontSize="24px"
            fontWeight="regular"
            fontFamily="poppins"
            mr="15px"
            p="2"
          >
            <NextLink href="/contact">
              <a>Contact</a>
            </NextLink>
          </Box>
        </Box>
      </Flex>
      <Box mx="200px" h="230px">
        <Box>
          <Text
            pt="50px"
            px="50px"
            ml="15px"
            fontSize="68px"
            fontWeight="semibold"
            color={highlightColor}
          >
            {project.name}
          </Text>
          <Text
            ml="65px"
            fontSize="18px"
            fontWeight="thin"
            color={highlightColor}
          >
            Created: &nbsp;{project.year}
          </Text>
        </Box>
      </Box>

      <Image w="1442px" h="600px" src={imageArray[1]} />
      <Box mx="200px">
        <Box p="35px" fontFamily="montserrat" fontWeight="thin">
          <Text fontSize="40px">Used technologies:</Text>
          <UnorderedList fontSize="18px">
            {projectArray.map((technologies) => {
              return (
                <ListItem ml="45px" my="25px" color={highlightColor}>
                  <Text color={circleBG}>{technologies}</Text>
                </ListItem>
              );
            })}
            )
          </UnorderedList>
        </Box>
        <Box mx="50px" w="841px" fontFamily="montserrat">
          <Text fontWeight="regular" fontSize="18px">
            {project.description} {project.long}
          </Text>
          <Flex pt="40px" pb="200px" fontSize="18px" fontWeight="thin">
            <Box mt="3px" color={highlightColor}>
              <FaGithub />
            </Box>
            <Link ml="10px" isExternal href={project.link}>
              Github
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
