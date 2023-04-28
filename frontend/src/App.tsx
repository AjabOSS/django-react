import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [bookName, setBookName] = useState("");
  const [boodId, setBookId] = useState("");

  useEffect(() => {
    //axios.get("http://localhost:8000/api/").then((res) => console.log(res));
    //fetch("http://localhost:8000/api/").then((res) => console.log(res));
  }, []);

  function submitNewBook() {
    const newBook = {
      name: bookName,
      code: boodId,
    };
    fetch("http://localhost:8000/api/", {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => console.log(res));
  }

  return (
    <>
      <form action="#">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            setBookId(e.target.value);
          }}
        />
      </form>

      <button onClick={submitNewBook}>Submit</button>
    </>
  );
}

export default App;
