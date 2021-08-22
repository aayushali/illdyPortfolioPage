import React, { useState, useEffect } from "react";
import axios from "axios";
import TextInput from "./TextInput";

function UsingAPI() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <h2 className="font-bold ml-10 text-red-400 p-4 underline text-2xl">
        This is a sample API Request to fetch Post
      </h2>
      <input
        className="w-64 h-12 border bg-gray-50 rounded-md ml-20 text-center"
        placeholder="Please Enter Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        className="border-2 bg-gray-200 p-3 rounded-lg ml-5 hover:bg-yellow-400 hover:text-white"
        onClick={handleClick}
      >
        Get title
      </button>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      
      </ul> */}
      <div className="font-bold ml-10 text-green-300 p-4">{post.title}</div>
    </div>
  );
}

export default UsingAPI;
