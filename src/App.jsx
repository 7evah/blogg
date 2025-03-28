import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <Header/>
      

      <Hero/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;