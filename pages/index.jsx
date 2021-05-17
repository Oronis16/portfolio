import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  Stack,
  Switch,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
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
          >
            Andreyka Krisztina
          </Box>
        </Box>
        <Spacer />
        <Stack align="center" direction="row" mr="15px">
          <Switch colorScheme="blackAlpha" size="sm" />
        </Stack>
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
              <Text display="inline-block" color="brand.500">
                &nbsp;future
              </Text>
            </Text>
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
      </Box>
    </>
  );
}
