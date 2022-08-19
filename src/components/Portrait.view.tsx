import React, { FC } from "react";
import {
  Badge,
  Box,
  Center,
  chakra,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import portrait from "../images/portrait.png";
import { MdStar } from "react-icons/md";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Portrait: FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Center h="100vh">
        <ChakraBox p="5" bgColor="#FFF" borderWidth="1px" borderRadius="1rem">
          <Image
            src={portrait}
            alt={"Be dev portrait"}
            boxSize="600px"
            height="85vh"
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
    </div>
  );
};

export default Portrait;
