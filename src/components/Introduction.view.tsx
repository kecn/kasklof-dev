import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

const Introduction: FC = () => {
  return (
    <Center h="110vh">
      <Text
        bgGradient="linear(to-l, #FFF, #FF08)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Hej!
      </Text>
    </Center>
  );
};

export default Introduction;
