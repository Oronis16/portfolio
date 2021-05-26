import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Circle,
  Flex,
  ListItem,
  Spacer,
  Stack,
  Link,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Contact() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
  const circleBG = useColorModeValue("brandDark.primary", "white");
  const highlightColor = useColorModeValue(
    "brandLight.secondaryText",
    "brandDark.secondaryText"
  );
  const carBG = useColorModeValue("white", "brandDark.secondary");
  return (
    <Box>
      <Flex mx="20px">
        <Box>
          <Box
            as="button"
            fontSize="36px"
            fontWeight="light"
            fontFamily="poppins"
            letterSpacing="3px"
          >
            <Link href="/">Andreyka Krisztina</Link>
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
      <Box mt="50px" h="100vh" mx="200px">
        <Flex ml="150px">
          <Stack ml="150px" mt="150px">
            <Text fontFamily="Poppins" fontSize="40px" fontWeight="semibold">
              You can contact me on:
            </Text>
            <Flex>
              <Text fontFamily="poppins" fontSize="24px" fontWeight="regular">
                <UnorderedList pl="15px" fontSize="30px">
                  <ListItem mb="25px" color={highlightColor}>
                    <Text color={circleBG}>
                      email: andreyka.kriszti@gmail.com
                    </Text>
                  </ListItem>
                  <ListItem mb="25px" color={highlightColor}>
                    <Text color={circleBG}>mobile: +36 20/404-7190</Text>
                  </ListItem>
                  <ListItem mb="25px" color={highlightColor}>
                    <Link
                      color={circleBG}
                      href="https://github.com/Oronis16"
                      isExternal
                    >
                      Github <ExternalLinkIcon mx="3px" />
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
