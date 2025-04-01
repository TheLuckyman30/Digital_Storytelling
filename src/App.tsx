import { JSX, useEffect, useState } from "react";
import { docs_v1 } from "googleapis";
import "./css/App.css";
import TextComponent from "./components/TextComponent";
import img1 from "./assets/Background.png";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import pic6 from "./assets/pic6.jpg";
import pic7 from "./assets/pic7.jpg";
import pic8 from "./assets/pic8.jpg";
import pic9 from "./assets/pic9.jpg";
import pic10 from "./assets/pic10.jpg";
import pic11 from "./assets/pic11.jpg";
import pic12 from "./assets/pic12.jpg";
import pic13 from "./assets/pic13.jpg";
import pic14 from "./assets/pic14.jpg";

function App() {
  const [text, setText] = useState<JSX.Element[]>([]);

  function getContent(
    imageToUse: string,
    listOfImages: {
      name: string;
      value: string;
    }[]
  ) {
    const temp: JSX.Element[] = [];
    let body: string = "";
    fetch(import.meta.env.VITE_FETCH_URL)
      .then((response) => response.json())
      .then((document: docs_v1.Schema$Body) => {
        const contents = document?.content;
        if (contents) {
          contents.forEach((content) => {
            const elements = content.paragraph?.elements;
            if (elements) {
              elements.forEach((element) => {
                if (element.textRun?.content) {
                  const stringifiedContent = element.textRun.content;
                  if (stringifiedContent === "\n") {
                    const textCompnent = (
                      <TextComponent
                        text={body}
                        img={imageToUse}
                      ></TextComponent>
                    );
                    temp.push(textCompnent);
                    setText(temp);
                    body = "";
                  } else if (stringifiedContent.startsWith("pic")) {
                    const foundImage = listOfImages.find(
                      (image) => image.name === stringifiedContent.trim()
                    );
                    if (foundImage) {
                      imageToUse = foundImage.value;
                    }
                  } else {
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
          const textCompnent = (
            <TextComponent text={body} img={imageToUse}></TextComponent>
          );
          temp.push(textCompnent);
          setText(temp);
        }
      });
  }

  useEffect(() => {
    const listOfImages = [
      { name: "pic1", value: pic1 },
      { name: "pic2", value: pic2 },
      { name: "pic3", value: pic3 },
      { name: "pic4", value: pic4 },
      { name: "pic5", value: pic5 },
      { name: "pic6", value: pic6 },
      { name: "pic7", value: pic7 },
      { name: "pic8", value: pic8 },
      { name: "pic9", value: pic9 },
      { name: "pic10", value: pic10 },
      { name: "pic11", value: pic11 },
      { name: "pic12", value: pic12 },
      { name: "pic13", value: pic13 },
      { name: "pic14", value: pic14 },
    ];
    getContent(img1, listOfImages);
  }, []);

  return (
    <div className="main">
      <div>{text.map((text) => text)}</div>
    </div>
  );
}

export default App;
