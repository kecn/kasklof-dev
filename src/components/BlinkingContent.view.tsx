import { FC } from "react";
import "./BlinkingContent.css";

interface Props {
  text: string;
}

const BlinkingContent: FC<Props> = ({ text }) => {
  return <span className="blinking_content">{text}</span>;
};

export default BlinkingContent;
