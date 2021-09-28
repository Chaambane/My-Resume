import React from 'react';
import Classes from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import TravelBooking from '../../assets/images/projets/TravelBooking.jpg'

const projects = (props) => (
    <section className="container mt-4" id="projets">
        <h3 className="text-center text-primary fw-bold">Projets</h3>
        <div className={["d-flex flex-wrap justify-content-between", Classes.projetsBox].join(' ')}>
            <ProjectCard
                href={"#travel-booking.com"}
                imgP={TravelBooking}
                altP={"travel booking"}
                projectName={"Travel-Booking"}
            />
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </section>
);

export default projects;