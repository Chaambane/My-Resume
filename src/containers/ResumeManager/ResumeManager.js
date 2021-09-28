import React, {Component} from 'react';
import Classes from './ResumeManager.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

class ResumeManager extends Component {
    render() {
        return (
            <main className={["container-fluid", Classes.main].join(' ')}>
                <Navbar/>
                <Home/>
                <Skills/>
                <Projects/>
            </main>
        )
    };
} 

export default ResumeManager;