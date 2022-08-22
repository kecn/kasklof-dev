import { FC } from "react";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

const TechStack: FC = () => {
  return (
    <Center h={"75vh"}>
      <Box backgroundColor={"#FFF"}
        borderRadius="1rem"
        borderColor="purple.500"
        padding="2rem"
        p={5}
      >
        <Stack direction="column">
          <Center>
            <Text>
              <b>Vad gör jag?</b>
            </Text>
          </Center>

          <Center>
            <Stack direction="row" spacing={4}>
              <Text>Java</Text>
              <Text>Spring WebFlux</Text>
              <Text>Wicket</Text>
            </Stack>
          </Center>

          <Center>
            <Stack direction="row" spacing={4}>
              <Text>React</Text>
              <Text>Redux</Text>
              <Text>MaterialUI</Text>
            </Stack>
          </Center>

          <Center>
            <Stack direction="row" spacing={4}>
              <Text>Git</Text>
              <Text>Azure DevOps</Text>
              <Text>Jenkins</Text>
            </Stack>
          </Center>
        </Stack>
      </Box>
    </Center>
  );
};

export default TechStack;
