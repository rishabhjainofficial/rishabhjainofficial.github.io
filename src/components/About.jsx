import React from 'react'
import styles from "./About.module.css";

const About = () => {
    const data = [
        {
            "title": "Fullstack Developer",
            "link_title": "Projects",
            "link": "#projects",
            "icon": "</>"
        },
        {
            "title": "Freelancer",
            "link_title": "Hire me!",
            "link": "#hire",
            "icon": "{ }"
        }
    ];
    return (
        <div className={`${styles.aboutDiv} `} id='about'>
            <div className="row">
                <div className='d-flex'>
                    <p className={`${styles.heading} green_text`}>aboutMe</p>
                    <p className={`${styles.heading} white_text`}>( )</p>
                </div>
                <div className={`${styles.headingDiv} col-sm-12 col-md-6`}>
                    <div>
                        <p className={`${styles.desc} white_text`}>
                            As a full-stack maestro with 5 years under my belt, I've woven my expertise into a tapestry of digital marvels. From sculpting CRM realms to orchestrating ERP symphonies, each project is a brushstroke of innovation. Whether crafting e-commerce escapades or sculpting learning platform odysseys, I blend front-end finesse with back-end wizardry to craft experiences that defy convention. With a toolbox brimming with the latest tech, I dance between frameworks and languages, driven by a relentless quest for excellence. In a world of code, I am the architect, the alchemist, and the storyteller, weaving dreams into digital reality.
                        </p>
                    </div>
                </div>
                <div className={`${styles.linkMainDiv} col-sm-12 col-md-6`}>
                    {data.map((item) => {
                        return (
                            <div className={`${styles.linkDiv}`} key={item.title}>
                                <div>
                                    <div className={`white_text`}>{item.title}</div>
                                    <div className={`green_text ${styles.link_title}`}>{item.link_title}</div>
                                </div>
                                <div className={`green_text ${styles.icon}`}>{item.icon}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
