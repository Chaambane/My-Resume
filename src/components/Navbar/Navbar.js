import React from 'react';
import Classes from './Navbar.module.css';
import Logo from '../../assets/images/logo/logo-petit.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const navbar = (props) => {
    return(
        <nav className={["navbar navbar-expand-lg navbar-top navbar-dark rounded", Classes.navbar].join(' ')}>
            <div className="container-fluid p-2">
                <a className="navbar-brand" href="#moi">
                    <img src={Logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={["navbar-nav me-auto mb-2 mb-lg-0", Classes.navbarNav, Classes.navbarNavItem].join(' ')}>
                        <li className="nav-item">
                            <a className="nav-link" href="#moi">Moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#competences">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projets">Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="https://github.com/Chaambane" rel="noreferrer" target="_blank" className="bg-white rounded">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="text-success"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default navbar;