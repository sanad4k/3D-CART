import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ()=>{
    const[ open , setopen]=useState(false);
    

    const toggle=()=>{
        setopen(!open);
    }
    return(
        <nav className='navbar'>
            <div className='brand'>
                <Link className='BRANDNAME' to='#'><img alt='logo' src='logo.png' className='logo_image'/></Link>
                {/* <a to='#' className='brandName'>twu</a> */}
                <Link to='/' className='BRANDNAME'>3D CART</Link>
                
            </div>
            <div className={`menuItems ${open ? 'open' : ''}`}>
                <Link to='/'>EXPLORE</Link>
                <Link to='#'>LIBRARY</Link>
                <Link to='/Profile'>PROFILE</Link>
                <Link to='#'>PUBLISHES</Link>
                <Link to='/Dashboard'>DASHBOARD</Link>
                <Link to='/About'>ABOUT US</Link>
            </div>
            <button  className={` ${open ? 'toggle_clr': 'toggler'} postioning`} onClick={toggle}>☰</button>
        </nav>
    )
}
export default Navbar;