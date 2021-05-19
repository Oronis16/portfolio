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
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
  const bg2 = useColorModeValue("brandLight.secondary", "brandDark.secondary");
  const circleBG = useColorModeValue("brandDark.primary", "white");
  const highlightColor = useColorModeValue(
    "brandLight.secondaryText",
    "brandDark.secondaryText"
  );

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
            About
          </Box>
          <Box
            as="button"
            fontSize="24px"
            fontWeight="regular"
            fontFamily="poppins"
          >
            Contact
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
                Hi, I'm Kriszti 👋 &nbsp;Aspiring Junior Software Developerfrom
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
            <Text letterSpaing="5px" ml="450px">
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
            <Box
              ml="460px"
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
      </Box>
    </Box>
  );
}
