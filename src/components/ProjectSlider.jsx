import React from 'react';
import styles from "./ProjectSlider.module.css";

const ProjectSlider = ({ projects }) => {
    return (
        <div className={`${styles.scroll_container}`}>
            {projects.map((project, index) => {
                return (
                    <div className={`${styles.itemDiv}`} key={index}>
                        <img src={`./${project.image}`} alt="Cinque Terre" loading='lazy' />
                        <div className={`${styles.itemTextDiv}`}>
                            <a href={`${project.link}`} target="_blank" rel="noreferrer">
                                <p className={`${styles.itemText} white_text`}>{project.name}</p>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectSlider;
