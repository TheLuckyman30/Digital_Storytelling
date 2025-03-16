import { useState } from "react";
import { docs_v1 } from 'googleapis'
import './App.css'
import TextComponent from "./components/TextComponent";

function App() {
  const [text, setText] = useState<string[]>([]);

  function getContent () {
    const temp: string[] = [];
    let body: string = '';
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((document: docs_v1.Schema$Body) => {
        const contents = document?.content
        if (contents) {
          contents.forEach((content) => {
            const elements = content.paragraph?.elements;
            if (elements) {
              elements.forEach((element) => {
                if (element.textRun?.content) {
                  const stringifiedContent = element.textRun.content;
                  if (stringifiedContent === '\n') {
                    temp.push(body);
                    setText(temp);
                    body = '';
                  }
                  else {
                    body += stringifiedContent + "  \n";
                  }
                }
              });
            }
          });
        }
      })
      .then(() => {
        if (body.length) {
          temp.push(body);
          setText(temp);
        }
      });
  }

  return (
    <div>
      <div onClick={getContent} className="button">Get Content</div>
      <div>
        {text.map((t: string, index: number) => 
          <TextComponent text={t} key={index}></TextComponent>
        )}
      </div>
    </div>
  );
}

export default App;
