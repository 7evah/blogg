import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  const [count, setCount] = useState(0);

  return (
   <div className="flex justify-center items-center h-screen">
    Hello Geeks
   </div>
  );
}

export default App;
