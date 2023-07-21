import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../components/cards";
const AllNews = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function getNews() {
      console.log("fetching")
      await axios
        .get(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bffeadf0e504464bb10e27b49fa20e34"
        )
        .then((d) => {
          // console.log(d.data.articles);
          setData(d.data.articles);
        });
    }
    getNews();
  }, []);
  return <div className="allnews tech">
    <div className="cards_result">
        {data.map((i,index) => {
          return (
            <Cards
              key = {index}
              Url = {i.url}
              headline={i.title}
              Imgsrc={i.urlToImage}
              Des={i.description}
              content={i.content}
              author={i.author}
              date={i.publishedAt}
            />
          );
        })}
      </div>
  </div>;
}

export default AllNews