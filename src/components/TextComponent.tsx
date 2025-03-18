import ReactMarkdown from "react-markdown";
import './../css/TextComponent.css'

interface TextComponentProps {
    text: string;
}

function TextComponent ({text}: TextComponentProps) {
    return (
        <div className="text-box">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    )
}

export default TextComponent;