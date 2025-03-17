import ReactMarkdown from "react-markdown";

interface TextComponentProps {
    text: string;
}

function TextComponent ({text}: TextComponentProps) {
    return (
        <div style={{ padding: '1rem', margin: '10rem', borderRadius: '15px', backgroundColor: 'white', boxShadow: '1rem 1rem 1rem rgb(1 0 0 / 30%)', width: '40rem'}}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        
    )
}

export default TextComponent;