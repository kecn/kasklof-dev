import React from "react";
import portrait from "./portrait.png";
import {
  Badge,
  Box,
  Center,
  chakra,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { MdStar } from "react-icons/md";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

function App() {
  return (
    <div className="App">
      <header>
        <Center h="100vh">
          <ChakraBox
            maxW="320px"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            // @ts-ignore
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              src={portrait}
              alt={"Be dev portrait"}
              boxSize="600px"
              _hover={{ scale: 1.1 }}
            />
            <Flex align="baseline" mt={2}>
              <Badge colorScheme="orange">BE-dev</Badge>
              <Text
                ml={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="orange.800"
              >
                Semi-senior &bull; Sweden
              </Text>
            </Flex>
            <Flex mt={2} align="center">
              <Box as={MdStar} color="orange.400" />
              <Text ml={1} fontSize="sm">
                <b>7/10</b>
              </Text>
            </Flex>
          </ChakraBox>
        </Center>
      </header>
    </div>
  );
}

export default App;
