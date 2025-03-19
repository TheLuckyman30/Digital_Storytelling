import { JSX, useState } from "react";
import { docs_v1 } from 'googleapis'
import './css/App.css'
import TextComponent from "./components/TextComponent";
import img1 from './assets/Background.png'

function App() {
  const [text, setText] = useState<JSX.Element[]>([]);
  document.body.style.backgroundImage=`url(${img1})`
  
  function getContent () {
    const temp: JSX.Element[] = [];
    let body: string = '';
    fetch(import.meta.env.VITE_FETCH_URL)
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
                    const textCompnent = <TextComponent text={body}></TextComponent>
                    temp.push(textCompnent);
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
          const textCompnent = <TextComponent text={body}></TextComponent>
          temp.push(textCompnent);
          setText(temp);
        }
      });
  }

  return (
    <div className="main">
      {!text.length && <div onClick={getContent} className="button">Get Contnet</div>}
      <div>
        {text.map((text) => text)}
      </div>
    </div>
  );
}

export default App;
