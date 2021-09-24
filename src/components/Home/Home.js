import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Classes from './Home.module.css';
import ButtonLarge from '../ButtonLarge/ButtonLarge';

const home = (props) => {
    return(
        <section className={["container-fluid mt-1 rounded mt-4"].join(' ')} id="#moi">
            <div className={["container text-center", Classes.perso].join(' ')}>
                <div className={[Classes.persoBox]}>
                    <h1 className="fw-bold">
                        Salut, moi c'est Chaambane
                    </h1>
                    <h2>
                        Développeur Front-end <span className="text-danger fw-bold">REACT. </span><FontAwesomeIcon icon={faReact} size="2x" className="text-danger"/>
                    </h2>
                    <a href="../../assets/documents/CV.pdf" download>
                        <ButtonLarge typeBtn="btn-outline-primary">Téléchargez mon CV</ButtonLarge>
                    </a>
                    <a href="mailto:chaambane.faidine@gmail.com">
                        <ButtonLarge typeBtn="btn-dark">Contactez-moi</ButtonLarge>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default home;