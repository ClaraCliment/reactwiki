import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
            {/** Titre */}
            <Link to="/" className='ubuntu fs-3 my-1 navbar-brand'>Rick & Morty <span className='text-primary'>WiKi</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{border:"none"}}>
            <style jsx="true">
                {`button[aria-expanded="false"] > .close {
                    display: none;
                }
                button[aria-expanded="true"] > .open {
                    display: none;
                }
                `}
            </style>
            <FontAwesomeIcon style={{ color:"#0b5ed7"}} icon={faBars} className="open" />
            <FontAwesomeIcon style={{ color:"#0b5ed7"}} icon={faXmark} className="close" />

            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link fs-5" to="/">Characters</NavLink>
                <NavLink className="nav-link fs-5" to="/episodes">Episodes</NavLink>
                <NavLink className="nav-link fs-5" to="/location">Location</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar