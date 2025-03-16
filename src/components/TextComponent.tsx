import ReactMarkdown from "react-markdown";

interface TextComponentProps {
    text: string;
}

function TextComponent ({text}: TextComponentProps) {
    return (
        <div style={{margin: '5rem', border: '1px solid black'}}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        
    )
}

export default TextComponent;