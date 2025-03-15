import { useEffect, useState } from "react";
import { docs_v1 } from 'googleapis'
import './App.css'

function App() {
  const [text, setText] = useState<string[]>([]);

  // useEffect(() => {
    
  //   fetch('http://localhost:3001')
  //     .then((response) => response.json())
  //     .then((document: docs_v1.Schema$Body) => {
  //       const contents = document?.content
  //       if (contents) {
  //         const temp: string[] = [];
  //         contents.forEach((content) => {
  //           const elements = content.paragraph?.elements;
  //           if (elements) {
  //             elements.forEach((element) => {
  //               if (element.textRun?.content) {
  //                 temp.push(element.textRun.content.toString())
  //                 setText(temp);
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  // }, []);

  return (
    <div>
      {text}
    </div>
  );
}

export default App;
