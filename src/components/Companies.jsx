import React from 'react'
import styles from "./Companies.module.css";

const Companies = () => {
    return (
        <div className={`${styles.mainDiv}`}>
            <div className={`${styles.innerDiv}`}>
                <div className="row mb-5">
                    <div className={`${styles.headingDiv} col-md-12`}>
                        <div className={`d-flex`}>
                            <p className={`${styles.heading} green_text`}>companies</p>
                            <p className={`${styles.heading} white_text`}>( )</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-md-6 ${styles.common_padding}`}></div>
                        <div className={`col-md-6 ${styles.common_padding} ${styles.lineDiv}`}>
                            <span className={`${styles.circleDiv}`}></span>
                            <div className="row">
                                <div className={`col-md-12 text-center`}>
                                    <h4 className={`green_text`}>8848 Digital</h4>
                                    <p className={`white_text`}>8848 Digital LLP is a digital transformation leader that provides solutions to clients across industries, through a broad range of technology & digital services.</p>
                                    <a className={`nav-link`} href="https://8848digital.com/" target="_blank" rel="noreferrer">
                                        <div className={`${styles.contactLink} white_text`}>
                                            Go to website
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-6 ${styles.common_padding}`}>
                            <div className="row">
                                <div className={`col-md-12 text-center`}>
                                    <h4 className={`green_text`}>Kadel Labs</h4>
                                    <p className={`white_text`}>Kadel Labs is a first-of-its-kind Venture Studio in India. Our commitment to fostering innovation, combined with our deep understanding of technology, sets us apart as a trusted technology enabler.</p>
                                    <a className={`nav-link`} href="https://kadellabs.com/" target="_blank" rel="noreferrer">
                                        <div className={`${styles.contactLink} white_text`}>
                                            Go to website
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-6 ${styles.common_padding} ${styles.lineDiv}`}>
                            <span className={`${styles.circleDiv}`}></span>
                        </div>
                        <div className={`col-md-6 ${styles.common_padding}`}></div>
                        <div className={`col-md-6 ${styles.common_padding} ${styles.lineDiv}`}>
                            <span className={`${styles.circleDiv}`}></span>
                            <div className="row">
                                <div className={`col-md-12 text-center`}>
                                    <h4 className={`green_text`}>WEBaniX Solutions</h4>
                                    <p className={`white_text`}>WEBaniX, an established IT consulting company with offices in US, and India. Specializing in Custom Software, Mobile App Development, Website Development, and SEO Consultation.</p>
                                    <a className={`nav-link`} href="https://webanixsolutions.com/" target="_blank" rel="noreferrer">
                                        <div className={`${styles.contactLink} white_text`}>
                                            Go to website
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
