import React from "react";

const BlogPost = ({ image, title, content }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
