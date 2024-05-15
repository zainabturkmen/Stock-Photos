import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fetchImages = async () => {
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return <main>
    
  </main>
}

export default App;
