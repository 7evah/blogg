import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 p-4 text-white shadow-md">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#articles" className="hover:underline">
                Articles
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-200 py-16 text-center">
        <h2 className="text-4xl font-bold">Welcome to My Blog</h2>
        <p className="mt-4 text-lg text-gray-700">
          Discover amazing articles on various topics.
        </p>
      </section>

      {/* Articles Section */}
      <section id="articles" className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="rounded-lg border bg-white p-4 shadow-md"
            >
              <h3 className="text-xl font-bold">Article {item}</h3>
              <p className="mt-2 text-gray-600">
                This is a short description of the article.
              </p>
              <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="mt-auto bg-black p-6 text-center text-white"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">THE 5 LIONES</h1>
          <p>&copy; 2025 THE 5 LIONES. Geeks Institute.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-medium">Geeks Institute of Technology</h2>
          <p>Thank you for visiting our page.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:underline">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://instagram.com" className="hover:underline">
            Instagram
          </a>
          <a href="https://youtube.com" className="hover:underline">
            YouTube
          </a>
        </div>
      </footer>
=======
    <div className="min-h-screen flex flex-col">
    
      <Header/>
      

      <Hero/>
      <Content/>
      <Footer/>

>>>>>>> 40869aad9073959d4c988519a09b2f3732182ad0
    </div>
  );
}

export default App;
