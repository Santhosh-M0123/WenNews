import React from "react";
// import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  let NavigateToNews = (url) => {
    console.log(url)
    window.open(url , 'blank_')
  }
  return (
    <div className="card" onClick={() =>NavigateToNews(props.Url)}>
        {/* <div className="title_news">
            <p>Tech news</p>
        </div> */}
      <div className="headline">
        <h3>
          {props.headline}
        </h3>
      </div>
      <div className="cover_img">
        <img
          src={props.Imgsrc}
          alt="cover_img"
        />
      </div>
      <div className="description">
        <h5>
          {props.Des}
        </h5>
      </div>
      <div className="content">
        <p>
          "CodeSee was founded in 2019 with the goal of helping programmers
          understand the entire code base inside a company. The idea was to
          provide visual maps, so you could see the connections between servic…
          [+2529 chars]"
        </p>
      </div>
      {/* <div className="auth_date">
        <div className="author">
         <p> <span>Author : </span> {props.author}</p>
        </div>
      </div> */}
      {props.author != null ? (<div className="auth_date">
        <div className="author">
         <p> <span>Author : </span> {props.author}</p>
        </div>
      </div>) : null}
    </div>
  );
};

export default Cards;
