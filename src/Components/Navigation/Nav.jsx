import React from 'react'
import "./Nav.css"
import{Link} from 'react-router-dom';

const Nav = () => {
  return (
    
    <div className='navbar'>

    <li><a href="index.html"><img src="./Assets/logo.jpg" class="Logo" /></a></li> 
                <ul class="pages">
                  <Link to="/"className="home"><li><a href="index.html">Home</a></li></Link>  
                    <li><a href ="./Design">Design</a></li> 
                    <li><a href="./BlogS">Blogs</a></li> 
                    <li><a href="./InternetArt">Internet Artwork</a></li> 
                    
                  </ul>
    
            </div>
  )
}

export default Nav