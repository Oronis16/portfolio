import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Circle,
  Flex,
  Spacer,
  Stack,
  Link,
  Text,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AiOutlineMail,
  AiOutlinePaperClip,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "brandDark.primary");
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
      <Flex mx="20px">
        <Box>
          <Box
            cursor="pointer"
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
          cursor="pointer"
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
            fontSize="24px"
            fontWeight="regular"
            fontFamily="poppins"
            mr="15px"
            p="2"
          >
            <Text>Contact</Text>
          </Box>
        </Box>
      </Flex>
      <Box mt="50px" h="100vh" mx="200px">
        <Flex ml="150px">
          <Stack ml="150px" mt="150px">
            <Flex>
              <Text fontFamily="poppins" fontSize="24px" fontWeight="regular">
                <Flex py="5px">
                  <Box mt="7px" mr="10px" color={highlightColor}>
                    <AiOutlineMail />
                  </Box>

                  <Text color={circleBG}>
                    <a href="mailto:andreka.kriszti@gmail.com" alt="email me">
                      andreyka.kriszti@gmail.com
                    </a>
                  </Text>
                </Flex>
                <Flex py="5px">
                  <Box mt="7px" mr="10px" color={highlightColor}>
                    <AiOutlinePhone />
                  </Box>
                  <Text color={circleBG}>+36 20/404-7190</Text>
                </Flex>
                <Flex py="5px">
                  <Box mt="7px" mr="10px" color={highlightColor}>
                    <AiOutlinePaperClip />
                  </Box>
                  <a
                    href="/Andreyka_Krisztina_CV_en.pdf"
                    download
                    alt="cv download"
                  >
                    <Text color={circleBG}>CV download (EN)</Text>
                  </a>
                </Flex>
                <Flex py="5px">
                  <Box mt="7px" mr="10px" color={highlightColor}>
                    <AiOutlinePaperClip />
                  </Box>
                  <a
                    href="/Andreyka_Krisztina_CV_hu.pdf"
                    download
                    alt="cv download"
                  >
                    <Text color={circleBG}>CV download (HU)</Text>
                  </a>
                </Flex>
                <Flex py="5px">
                  <Box mt="5px" mr="10px" color={highlightColor}>
                    <FaGithub />
                  </Box>
                  <Link
                    color={circleBG}
                    href="https://github.com/Oronis16"
                    isExternal
                  >
                    Github <ExternalLinkIcon mx="3px" />
                  </Link>
                </Flex>
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
