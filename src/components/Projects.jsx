import React from 'react'
import styles from "./Projects.module.css";
import ProjectSlider from './ProjectSlider';

const Projects = () => {
    const projects = [
        {
            name: "Minfert",
            image: "minfert.png",
            link: "https://minfert.in/"
        },
        {
            name: "NM India Bio",
            image: "nmindia.png",
            link: "https://www.nmindiabio.com/"
        },
        {
            name: "UCCI Udaipur",
            image: "ucci.png",
            link: "https://ucciudaipur.com/"
        },
        {
            name: "Makeup Biography",
            image: "makeupbiography.png",
            link: "https://makeupbiography.com/"
        },
        {
            name: "20 Mkonnect",
            image: "20microns.png",
            link: "http://20mkonnect.20microns.com/"
        },
        {
            name: "20 mcc",
            image: "20mcc.png",
            link: "https://20mcc.in/"
        },
        {
            name: "Webanix Solutions",
            image: "webanix.png",
            link: "https://webanixsolutions.com/"
        },
        {
            name: "WEBPM",
            image: "webpm.png",
            link: "https://webpm.webanixsolutions.com/"
        },
        {
            name: "Price360",
            image: "price360.png",
            link: "https://price360.in/"
        },
        {
            name: "Nimara",
            image: "nimara.png",
            link: "https://mgm.brandtalks.in/"
        },
        {
            name: "Third Space",
            image: "third-space.png",
            link: "https://third-space.in/"
        },
        {
            name: "Dharohar",
            image: "dharohar.png",
            link: "https://dharohar.org/"
        },
        {
            name: "FiveS Digital",
            image: "fivesdigital.png",
            link: "https://fivesplash.brandtalks.in/"
        },
        {
            name: "Eragon",
            image: "eragon.png",
            link: "https://eragon.brandtalks.in/"
        },
        {
            name: "Dr Sunny",
            image: "drsunny.png",
            link: "https://drsunnyfrontend.paperscissorstone.in/"
        },
    ];
    return (
        <div className={`${styles.mainDiv}`} id='projects'>
            <div className={`${styles.innerDiv}`}>
                <div className={`${styles.headingDiv}`}>
                    <div className={`d-flex`}>
                        <p className={`${styles.heading} green_text`}>projects</p>
                        <p className={`${styles.heading} white_text`}>( )</p>
                    </div>
                </div>
            </div>
            <ProjectSlider projects={projects} />
        </div>
    )
}

export default Projects
