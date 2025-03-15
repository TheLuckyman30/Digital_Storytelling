import { useEffect } from "react";
import './App.css'

function App() {

  useEffect(() => {
    
    fetch('http://localhost:3001')
      .then((response) => response.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      Temp
    </div>
  );
}

export default App;
