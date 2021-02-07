import "./styles.css";
import Form from "./InputForm";
import Pyramid from "./Pyramid";
import { useState } from "react";
import PyramidPhoto from "./PyramidPhoto";

export default function App() {
  const [height, setHeight] = useState(null);

  return (
    <div>
      <h1 className="App">CS50 Mario</h1>
      <Form height={height} setHeight={setHeight} />
      <Pyramid height={height} />
      {height <= 0 || height >= 9 ? "" : <PyramidPhoto height={height} />}
    </div>
  );
}
