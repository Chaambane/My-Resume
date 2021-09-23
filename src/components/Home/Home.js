import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Classes from './Home.module.css';
import ImageProfil from '../../assets/images/portfolio/imgProfil.jpg';

const home = (props) => {
    return(
        <section className={["container-fluid mt-1 rounded"].join(' ')} id="#moi">
            <div className={["row no-gutters", Classes.moi].join(' ')}>
                <div className={["col-6", Classes.monNom].join(' ')}>
                    <h1>
                        Chaambane
                    </h1>
                    <h2>
                        Développeur Front-end <span className="text-info fw-bold">REACT </span><FontAwesomeIcon icon={faReact} size="2x" className="text-info"/>
                    </h2>
                </div>
                <div className={["col-6", Classes.image].join(' ')}>
                    <img src={ImageProfil} alt="imgProfil" className="card-img"/>
                </div>
            </div>
            <div className={["row no-gutters", Classes.mission].join(' ')}>
                <div className={["col-6", Classes.presentation].join(' ')}>
                    <p>
                        A travers ce site je souhaite partagé avec vous mes Réalisations! <br />
                            Bonne navigation
                    </p>
                    <div>
                        <button className="btn btn-outline-success fw-bold fs-5 me-4">Télécharger mon CV</button>
                        <button className="btn btn-outline-primary fw-bold fs-5 btn-lg">Contact</button>
                    </div>
                </div>
                <div className={["col-6", Classes.imgAndCompetence].join(' ')}>
                    <h2>Mes Compétences</h2>
                    <div className="border border-dark">
                        <div className="progress mt-4" style={{height: 2 + "rem"}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: 90 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">REACT: 90%</div>
                        </div>
                        <div className="progress mt-4" style={{height: 2 + "rem"}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: 85 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">CSS: 85%</div>
                        </div>
                        <div className="progress mt-4" style={{height: 2 + "rem"}}>
                            <div className="progress-bar bg-warning text-dark" role="progressbar" style={{width: 85 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT: 85%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default home;