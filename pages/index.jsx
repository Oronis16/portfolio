import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  Stack,
  Square,
  Circle,
  UnorderedList,
  ListItem,
  useColorMode,
  useColorModeValue,
  Heading,
  Center,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import projects from "../src/projects.json";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
  const bg2 = useColorModeValue("brandLight.secondary", "brandDark.secondary");
  const circleBG = useColorModeValue("brandDark.primary", "white");
  const highlightColor = useColorModeValue(
    "brandLight.secondaryText",
    "brandDark.secondaryText"
  );
  const carBG = useColorModeValue("white", "brandDark.secondary");

  return (
    <Box bg={bg}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
      </style>

      <Flex mx="30px">
        <Box>
          <Box
            as="button"
            fontSize="36px"
            fontWeight="light"
            fontFamily="poppins"
            letterSpacing="3px"
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
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Flex mt="100px">
          <Stack ml="150px">
            <Text fontFamily="Poppins" fontSize="65px" fontWeight="semibold">
              Building modern apps for todays and for the
              <Text display="inline-block" color={highlightColor}>
                &nbsp;future
              </Text>
            </Text>
            <Flex>
              <Square
                mt="13px"
                mr="15px"
                w="69px"
                h="7px"
                bg={highlightColor}
              ></Square>
              <Text fontFamily="poppins" fontSize="24px" fontWeight="regular">
                Hi, I'm Kriszti 👋 &nbsp;Aspiring Junior Software Developer from
                the heart of Europe.
              </Text>
            </Flex>
          </Stack>
          <Spacer />
          <Box
            mr="150px"
            ml="100px"
            minW="400px"
            minH="400px"
            w="400px"
            h="400px"
          >
            <Image src="Female_Spanish.png" />
          </Box>
        </Flex>
        <Box mt="100px" bg={bg2} h="774px">
          <Flex>
            <Square
              ml="150px"
              mt="105px"
              mr="15px"
              w="69px"
              h="7px"
              bg={highlightColor}
            ></Square>
            <Text
              mt="70px"
              fontFamily="poppins"
              fontSize="48px"
              fontWeight="thin"
              letterSpacing="5px"
            >
              SKILLS
            </Text>
          </Flex>
          <Flex
            mt="50px"
            ml="330px"
            fontFamily="poppins"
            fontSize="30px"
            fontWeight="200"
            letterSpacing="5px"
          >
            <Text>FRONTEND</Text>
            <Text letterSpacing="5px" ml="450px">
              BACKEND
            </Text>
          </Flex>
          <Flex>
            <Box
              ml="300px"
              mt="30px"
              fontFamily="Montserrat"
              fontSize="regular"
            >
              <UnorderedList fontSize="30px">
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>JavaScript</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>HTML</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>CSS</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>React.js</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>Next.js</Text>
                </ListItem>
                <ListItem color={highlightColor}>
                  <Text color={circleBG}>Figma</Text>
                </ListItem>
              </UnorderedList>
            </Box>
            <Center bg={circleBG} mt="35px" w="1px" ml="230px" height="420px">
              <Divider orientation="vertical" />
            </Center>
            <Box
              ml="220px"
              mt="30px"
              fontFamily="Montserrat"
              fontSize="regular"
            >
              <UnorderedList fontSize="30px">
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>Node.js</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>Express</Text>
                </ListItem>
                <ListItem mb="25px" color={highlightColor}>
                  <Text color={circleBG}>PostgreSQL</Text>
                </ListItem>
                <ListItem color={highlightColor}>
                  <Text color={circleBG}>REST</Text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Square
              ml="150px"
              mt="105px"
              mr="15px"
              w="69px"
              h="7px"
              bg={highlightColor}
            ></Square>
            <Text
              mt="70px"
              fontFamily="poppins"
              fontSize="48px"
              fontWeight="200"
              letterSpacing="5px"
            >
              PROJECTS
            </Text>
          </Flex>
        </Box>
        <Flex
          maxW="1024px"
          m="auto"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {projects.map((project) => (
            <Box
              w="400px"
              key={project.slug}
              bg={carBG}
              mt="100px"
              boxShadow="xl"
              mb="100px"
            >
              <Image w="400px" h="281.47px" src={project.image[0]} />
              <Box m="20px" pb="30px">
                <Heading
                  maxWidth="320px"
                  fontFamily="poppins"
                  fontSize="28px"
                  fontWeight="semibold"
                  isTruncated
                >
                  {project.name}
                </Heading>
                <Text
                  mt="30px"
                  mb="10px"
                  fontFamily="montserrat"
                  fontSize="18px"
                  fontWeight="regular"
                >
                  {project.year}
                </Text>
                <Text
                  fontFamily="montserrat"
                  fontSize="18px"
                  fontWeight="regular"
                >
                  {project.description}
                </Text>
                <Link href={`/project/${project.slug}`}>
                  <Text
                    fontFamily="montserrat"
                    fontSize="18px"
                    fontWeight="regular"
                    mt="25px"
                    ml="210px"
                    color={highlightColor}
                    cursor="pointer"
                  >
                    👉 &nbsp;details
                  </Text>
                </Link>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
