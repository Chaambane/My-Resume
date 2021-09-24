import React, {Component} from 'react';
import Classes from './ResumeManager.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';

class ResumeManager extends Component {
    render() {
        return (
            <main className={["container-fluid", Classes.main].join(' ')}>
                <Navbar/>
                <Home/>
                <Skills/>
            </main>
        )
    };
} 

export default ResumeManager;