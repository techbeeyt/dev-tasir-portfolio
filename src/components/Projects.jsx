import React from 'react';
import './Projects.css';
import ProjectCard from './projects/ProjectCard';

const Projects = () => {
    return (
        <>
            <div className="projects-container">
                <h2>My projects</h2>
                <div className="projects-list">
                    <ProjectCard imageSrc='https://images.pexels.com/photos/7587121/pexels-photo-7587121.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' projectName='First Project' desc={`The first project I've created is TurboOnline Project`} />
                    <ProjectCard imageSrc='https://images.pexels.com/photos/8356327/pexels-photo-8356327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' projectName='New Name' desc={`I've learned manthing doing this project`} />
                    <ProjectCard imageSrc='https://images.pexels.com/photos/4671859/pexels-photo-4671859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' projectName='Save The Jungle' desc='Funny Project' />
                    <ProjectCard imageSrc='https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' projectName='Study Time' desc='Another funny Project'/>
                </div>
            </div>
        </>
    );
};

export default Projects;