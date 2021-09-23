import React, {Component} from 'react';
import Classes from './ResumeManager.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';

class ResumeManager extends Component {
    render() {
        return (
            <main className={["container-fluid", Classes.main].join(' ')}>
                <Navbar/>
                <Home/>
                <footer>Pied de page</footer>
            </main>
        )
    };
}

export default ResumeManager;