import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Spline scene="https://prod.spline.design/zBGJfbB4e6pF39yZ/scene.splinecode" />
      </div>
    </>
  );
}

export default App;
