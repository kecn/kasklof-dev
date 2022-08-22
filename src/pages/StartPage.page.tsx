import { FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Center, Spinner, Box } from "@chakra-ui/react";
import Portrait from "../components/Portrait.view";
import TechStack from "../components/TechStack.view";
import Introduction from "../components/Introduction.view";

const StartPage: FC = () => {
  const [state, setState] = useState({
    items: [<Introduction key="introduction" />],
  });
  const [extraComponents] = useState([
    <Portrait key="portrait" />,
    <TechStack key="tech-stack" />,
  ]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]]),
      });
      setCount(count + 1);
    }, 750);
  };

  return (
    <Box
      bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/whiskey.png')"
      bgRepeat="no-repeat"
      objectFit="cover"
      padding="1rem"
    >
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <Center>
            <Spinner thickness="4px" size="xl" color="#FFF" />
          </Center>
        }
        endMessage={null}
      >
        {state.items.map((i) => i)}
      </InfiniteScroll>
    </Box>
  );
};

export default StartPage;
