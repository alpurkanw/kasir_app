import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyComponent from "./components/MyComponent";
// import "./App.css";
// import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyComponent>
    </MyComponent>
  );
}

export default App;
