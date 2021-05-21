import {
  Flex,
  Box,
  Circle,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
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
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
  const bg2 = useColorModeValue("brandLight.secondary", "brandDark.secondary");
  const circleBG = useColorModeValue("brandDark.primary", "white");
  const highlightColor = useColorModeValue(
    "brandLight.secondaryText",
    "brandDark.secondaryText"
  );
  const carBG = useColorModeValue("white", "brandDark.secondary");
  const projectArray = project.technologies;
  return (
    <Box bg={bg} h="100vh">
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
            letterSpacing="10px"
          >
            Andreyka Krisztina
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
          <Box
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
          </Box>
          <Box
            as="button"
            fontSize="24px"
            fontWeight="regular"
            fontFamily="poppins"
            mr="15px"
            p="2"
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box mx="200px" bg={bg2} h="280px">
        <Box>
          <Text
            p="50px"
            ml="15px"
            fontSize="48px"
            fontWeight="semibold"
            color={highlightColor}
          >
            {project.name}
          </Text>
          <Text
            ml="65px"
            fontSize="30px"
            fontWeight="thin"
            color={highlightColor}
          >
            created: &nbsp;{project.year}
          </Text>
        </Box>
      </Box>
      <Image w="1442px" h="631px" src="../prog.jpg" />
      <Box mx="200px" bg={bg2}>
        <Box p="50px" fontFamily="montserrat" fontWeight="thin">
          <Text fontSize="40px">Used technologies:</Text>
          <UnorderedList fontSize="30px">
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
          <Text fontWeight="regular" fontSize="30px">
            {project.description} {project.long}
          </Text>
          <Flex pt="50px" pb="200px" fontSize="30px" fontWeight="thin">
            <Image
              mt="8px"
              mr="10px"
              w="30px"
              h="26px"
              src="../github-icon.png"
            />
            <Link href="https://github.com/Oronis16?tab=repositories">
              Github
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
