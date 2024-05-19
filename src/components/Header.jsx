import React, { useState } from 'react'
import styles from "./Header.module.css";
import { BsLinkedin, BsGithub, BsGitlab } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    const [hideMenu, setHideMenu] = useState(false);
    return (
        <>
            <div className={`${styles.mainDiv}`}>
                <div className={`${styles.nameDiv}`}>
                    <span style={{ color: "#828282" }}>RISHABH</span><span style={{ color: "#F2F2F2" }}>JAIN</span>
                </div>
                <div className={`${styles.navDiv}`}>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">
                                <div className={`${styles.navLink}`}>About</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                <div className={`${styles.navLink}`}>Skills</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                <div className={`${styles.navLink}`}>Projects</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.leftDiv}`}>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/rishabh-jain-a88176167/" target="_blank" rel="noreferrer">
                                <div className={`${styles.navLink}`}>
                                    <BsLinkedin />
                                    Linkedin
                                </div>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-link" href="https://gitlab.com/rishabhwebanix" target="_blank" rel='noreferrer'>
                            <div className={`${styles.navLink}`}>
                                <BsGitlab />
                                Gitlab
                            </div>
                        </a>
                    </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/rishabhjainofficial" target="_blank" rel='noreferrer'>
                                <div className={`${styles.navLink}`}>
                                    <BsGithub />
                                    Github
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">
                                <div className={`${styles.navLink}`}>
                                    <BiMailSend className={`${styles.icons}`} />
                                    Contact me
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.hamburgerMenuDiv}`} onClick={() => {
                    setHideMenu(!hideMenu);
                }}>
                    {!hideMenu ?
                        <RiMenuFill className={`${styles.hamburgerMenu}`} /> :
                        <RiCloseLargeFill className={`${styles.hamburgerMenu}`} />
                    }
                </div>
            </div>
            <div className={`${styles.mobileNavDiv} ${hideMenu ? 'd-flex' : 'd-none'}`}>
                <ul className={`${styles.mobileNavLinksUl}`}>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#about">
                            <div className={`${styles.navLink}`}>About</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">
                            <div className={`${styles.navLink}`}>Skills</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            <div className={`${styles.navLink}`}>Projects</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/rishabh-jain-a88176167/" target="_blank" rel="noreferrer">
                            <div className={`${styles.navLink}`}>
                                {/* <BsLinkedin /> */}
                                Linkedin
                            </div>
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="https://gitlab.com/rishabhwebanix" target="_blank" rel='noreferrer'>
                            <div className={`${styles.navLink}`}>
                                <BsGitlab />
                                Gitlab
                            </div>
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/rishabhjainofficial" target="_blank" rel='noreferrer'>
                            <div className={`${styles.navLink}`}>
                                {/* <BsGithub /> */}
                                Github
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us">
                            <div className={`${styles.navLink}`}>
                                {/* <BiMailSend className={`${styles.icons}`} /> */}
                                Contact me
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
