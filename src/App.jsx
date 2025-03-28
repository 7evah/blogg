import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#articles" className="hover:underline">Articles</a></li>
            <li><a href="#footer" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="bg-gray-200 py-16 text-center">
        <h2 className="text-4xl font-bold">Welcome to My Blog</h2>
        <p className="text-lg text-gray-700 mt-4">Discover amazing articles on various topics.</p>
      </section>

      {/* Articles Section */}
      <section id="articles" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold">Article {item}</h3>
              <p className="text-gray-600 mt-2">This is a short description of the article.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;