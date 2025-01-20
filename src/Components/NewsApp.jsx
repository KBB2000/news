import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {

  const [search, setSearch] = useState()
  const [newsData, setNewsData] = useState(null)

  const API_KEY = "83b9ae3036254990a664ab5631fcd05e"

  const getData = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const data = await res.json()
    setNewsData(data.articles)
  }

  useEffect(() => {
    getData()
  },[])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <nav>
        <div><h1>Trendy News</h1></div>
        <ul>
          <a href="">All News</a>
          <a href="">Trending</a>
        </ul>
        <div className="searchbar">
          <input type="text" placeholder="search news" onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div className="categoryBtn">
        <button>sports</button>
        <button>politics</button>
        <button>interment</button>
        <button>health</button>
        <button>fitness</button>
      </div>
      <div>
        {newsData ?<Card data = {newsData}/> : null }
      </div>
    </div>
  );
};

export default NewsApp;
