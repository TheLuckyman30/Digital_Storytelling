import ReactMarkdown from "react-markdown";

interface TextComponentProps {
    text: string;
}

function TextComponent ({text}: TextComponentProps) {
    return (
        <div style={{margin: '5rem', padding: '1rem', borderRadius: '15px', backgroundColor: 'white', boxShadow: '1rem 1rem 1rem rgb(1 0 0 / 30%)'}}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        
    )
}

export default TextComponent;