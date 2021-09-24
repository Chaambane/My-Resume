import React from 'react';
import Classes from './Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattleNet, faReact, faBootstrap, faCss3, faJs, faNodeJs, faGithub} from '@fortawesome/free-brands-svg-icons';

    const skills = (props) => (
        <section className={["container rounded", Classes.sectionSkills].join(' ')} id="competences">
            <h3 className="text-center text-white fw-bold">Compétences</h3>
            <div className="row no-gutters">
                <div className={["col-5", Classes.boxProgress].join(' ')}>
                    <div className="progress mt-2">
                        <div className="progress-bar bg-info fw-bold" role="progressbar" style={{width: 90 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faReact} size="2x"/> REACT: 90%</span></div>
                    </div>
                    <div className="progress mt-4">
                        <div className="progress-bar bg-warning fw-bold" role="progressbar" style={{width: 85 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faJs} size="2x"/> JAVASCRIPT: 85%</span></div>
                    </div>
                    <div className="progress mt-4">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" style={{width: 80 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faNodeJs} size="2x"/> NODE.JS: 80%</span></div>
                    </div>
                </div>
                <div className="col-2 text-center m-auto text-white"><FontAwesomeIcon icon={faBattleNet} size="6x"/></div>
                <div className={["col-5", Classes.boxProgress].join(' ')}>
                    <div className="progress mt-2">
                        <div className="progress-bar bg-secondary fw-bold" role="progressbar" style={{width: 90 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faBootstrap} size="2x"/> BOOTSTRAP: 90%</span></div>
                    </div>
                    <div className="progress mt-4">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" style={{width: 90 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faCss3} size="2x"/> CSS: 90%</span></div>
                    </div>
                    <div className="progress mt-4">
                        <div className="progress-bar bg-danger fw-bold" role="progressbar" style={{width: 85 + "%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"><span><FontAwesomeIcon icon={faGithub} size="2x"/> GIT & GITHUB: 85%</span></div>
                    </div>
                </div>
            </div>
        </section>
    );

export default skills;