import React from 'react'
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={`${styles.mainDiv}`} id='contact-us'>
            <div className={`${styles.innerDiv}`}>
                <div className={`${styles.headingDiv}`}>
                    <div className={`d-flex`}>
                        <p className={`${styles.heading} green_text`}>contact_me</p>
                        <p className={`${styles.heading} white_text`}>( )</p>
                    </div>
                    <div className={`${styles.form} row`}>
                        <form>
                            <div className="mb-3">
                                <input type="text" name="name" className="form-control" placeholder="Name*" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" className="form-control" placeholder="Email*" required />
                            </div>
                            <div className="mb-3">
                                <input type="number" name="mobile" className="form-control" placeholder="Mobile*" required />
                            </div>
                            <div className="mb-3">
                                <textarea name="message" className="form-control" placeholder="Message*" required />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className={`${styles.submit_btn} green_text`}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
