import React from 'react';
import Classes from './Navbar.module.css';
import ImgPortfolio from '../../assets/images/portfolio/imgProfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faBattleNet, faBuffer, faSuperpowers} from '@fortawesome/free-brands-svg-icons';

const navbar = (props) => {
    return(
        <nav className={["navbar navbar-expand-lg navbar-top rounded", Classes.navbar].join(' ')}>
            <div className="container-fluid">
                <a href="#moi" className="navbar-brand">
                    <div className={["me-5", Classes.monLogo].join(' ')}>
                        <img src={ImgPortfolio} alt="logo" />
                    </div>
                </a>
                <button className={["navbar-toggler", Classes.textColor].join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler"><FontAwesomeIcon icon={faBuffer} size="1x" className={[Classes.textColor].join(' ')}/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={["navbar-nav me-auto mb-2 mb-lg-0", Classes.navbarNav, Classes.navbarNavItem].join(' ')}>
                        <li className="nav-item">
                            <a className="nav-link" href="#competences"><span><FontAwesomeIcon icon={faBattleNet}/></span>Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projets"><span><FontAwesomeIcon icon={faReact}/></span>Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#futur_Projet"><span><FontAwesomeIcon icon={faSuperpowers}/></span>Projet en cour</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="https://github.com/Chaambane" rel="noreferrer" target="_blank" className="bg-white rounded">
                            <FontAwesomeIcon icon={faGithub} size="2x" className={["me-3",Classes.textColor].join(' ')}/>
                        </a>
                        <a href="https://github.com/Chaambane" rel="noreferrer" target="_blank" className="bg-white rounded">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className={[Classes.textColor].join(' ')}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default navbar;