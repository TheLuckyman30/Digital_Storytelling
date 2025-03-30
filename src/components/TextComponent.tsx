import ReactMarkdown from "react-markdown";
import "./../css/TextComponent.css";

interface TextComponentProps {
  text: string;
  img: string;
}

function TextComponent({ text, img }: TextComponentProps) {
 
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      <div className="text-container">
        <div className="text-box"><ReactMarkdown>{text}</ReactMarkdown></div>
      </div>
    </div>
  );
}

export default TextComponent;