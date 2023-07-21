import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../components/cards";
import "../styles/tech.css";
const TechCrunch = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getTech() {
      await axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bffeadf0e504464bb10e27b49fa20e34"
        )
        .then((d) => {
          // console.log(d.data);
          setData(d.data.articles);
        });
    }
    getTech();
  }, []);
  return (
    <div className="tech">
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
    </div>
  );
};

export default TechCrunch;
