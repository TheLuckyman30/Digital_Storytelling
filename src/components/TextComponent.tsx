import ReactMarkdown from "react-markdown";
import './../css/TextComponent.css'

interface TextComponentProps {
    text: string;
    img: string;
}

function TextComponent ({text, img}: TextComponentProps) {

    // function setNewImage () {
    //     if (img) {

    //     }
    // }
    return (
        <div className="text-box" style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    )
}

export default TextComponent;