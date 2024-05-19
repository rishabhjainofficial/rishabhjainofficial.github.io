import React from 'react'
import styles from "./Skills.module.css";

const Skills = () => {
    const data = [
        "js_icon",
        "ts_icon",
        "react_icon",
        "node_icon",
        "next_icon",
        "css_icon",
        "html_icon",
        "laravel_icon",
        "php_icon",
        "codeigniter_icon",
        "mongodb_icon",
        "mysql_icon",
        "wordpress_icon",
        "python_icon",
        "git_icon",
        "ubuntu_icon",
    ];
    return (
        <div className={`${styles.mainDiv}`} id='skills'>
            <div className={`${styles.innerDiv}`}>
                <div className={`${styles.headingDiv}`}>
                    <div className={`d-flex`}>
                        <p className={`${styles.heading} green_text`}>skills</p>
                        <p className={`${styles.heading} white_text`}>( )</p>
                    </div>
                </div>
                <div className={`${styles.skillsDiv}`}>
                    {data.map((item) => {
                        return (
                            <div className={`${styles.skillDiv}`} key={item}>
                                <img src={`./${item}.png`} alt={item} height={80} width={80} style={{ objectFit: 'contain' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Skills
