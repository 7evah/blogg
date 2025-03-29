import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
