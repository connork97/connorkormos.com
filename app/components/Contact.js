import styles from './Contact.module.css';

import React, { forwardRef } from 'react'
import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'
import { BsLinkedin, BsBriefcaseFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = forwardRef(({ contactRef }) => {
    return (
        <div ref={contactRef} className={styles.contactWrapperDiv}>
            <h1 className={styles.contactH1}>Contact Me:</h1>
            <div className={styles.contactIconsDiv}>
                <Link href='http://www.github.com/connork97' target='_blank' className={styles.contactIconLink}>
                    <FaGithub className={styles.contactIcon} />
                    <span className={styles.contactSpan}>Github</span>
                </Link>
                <Link href='https://www.linkedin.com/in/connorkormos/' target='_blank' className={styles.contactIconLink}>
                    <BsLinkedin className={styles.contactIcon} />
                    <span className={styles.contactSpan}>LinkedIn</span>
                </Link>
                <div className={styles.contactIconLink} onClick={() => window.location.href = 'mailto:connorkormos97@gmail.com'}>
                    <MdEmail className={styles.contactIcon} />
                    <span className={styles.contactSpan}>connorkormos97@gmail.com</span>
                </div>
                <div className={styles.resumeDiv} onClick={() => window.open('/images/ConnorKormosResume.pdf')}>
                    <BsBriefcaseFill className={styles.contactIcon} onClick={() => window.open('/images/ConnorKormosResume.pdf')} />
                    <span className={styles.contactSpan}>Resume</span>
                </div>
            </div>
        </div>
    )
})

Contact.displayName = 'Contact'

export default Contact;