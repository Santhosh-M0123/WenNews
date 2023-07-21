import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Nav.css";

const Navbar = () => {
    let [toggle,setToggle] = useState('close')

    let Togglebutton = () => {
        toggle == 'close' ? setToggle('open') : setToggle('close')
    }
    let NavigateToPortfolio = () => {
        window.open("https://santhosh-m0123.github.io/portfolio/")
    }

  return (
    <div className='navbar'>
        <div className="nav_container">
        <div className="nav_title" onClick={()=> NavigateToPortfolio()}>
            <h3>WebNews</h3>
            <p>Have an update from one place :)</p>
        </div>
        <div className="navlinks" id={toggle}>
            <div className="close_icon">
            <i className="fa-solid fa-xmark" onClick={() => Togglebutton()}></i>
            </div>
            <div className="links_list">
            <NavLink to='/' className="links" activeclassname="active">Home</NavLink>
            <NavLink to='/tech' className="links" activeclassname="active">Tech</NavLink>
            <NavLink to="/business" className="links" activeclassname="active">Business</NavLink>
            <NavLink to="/tesla" className="links" activeclassname="active">Tesla</NavLink>
            <NavLink to="/allnews" className="links" activeclassname="active">All News</NavLink>
            {/* <NavLink to="/allnews" className="links" activeClassName="active">All News</NavLink> */}
            </div>
        </div>
        <div className="menu_icon">
        <i className="fa-solid fa-bars"  onClick={() => Togglebutton()}></i>
        </div>
        </div>
    </div>
  )
}

export default Navbar