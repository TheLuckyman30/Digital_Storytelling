import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make a GET request to the backend
    fetch("http://localhost:3001")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
