import React from 'react'
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let Navigate = useNavigate();
  return (
    <div className='home'>
        <div className="content_home">
            <div className="con">
            <h1><span style={{color : "rgb(78, 78, 253)"}}>Web</span>News</h1>
            <p>Have all News Update from one place</p>
            </div>
            <div className="btn" onClick={() => Navigate("/tech")}>
                Have an Update
            </div>
            <div className="dev_link">
                <p>Developed by <a href='https://santhosh-m0123.github.io/portfolio/' target='blank_'>Santhosh</a></p>
            </div>
        </div>
    </div>
  )
}

export default Home