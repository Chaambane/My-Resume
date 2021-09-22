import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';

class ResumeManager extends Component {
    render() {
        return (
            <main className="container-fluid">
                <Navbar/>
                <section>Profil page</section>
                <footer>Pied de page</footer>
            </main>
        )
    };
}

export default ResumeManager;