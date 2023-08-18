import styles from './Skills.module.css'

import { forwardRef } from 'react'

const Skills = forwardRef(({ skillsRef }) => {
    return (
        <div ref={skillsRef} className={styles.technicalSkillsWrapper}>
            <h1 className={styles.technicalSkillsH1}>Technical Skills</h1>
            <div className={styles.technicalSkillsDiv}>
                <div className={styles.languagesDiv}>
                    <h2>Languages</h2>
                </div>
                <div className={styles.favoriteSkillsDiv}>
                    <h2>Favorite Tech</h2>
                    <div className={styles.favoriteSkillsIconsDiv}>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                            className={styles.favoriteTechImage}
                            alt="err"
                            // style={{marginRight: '15%'}}
                        />
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
                            className={styles.favoriteTechImage}
                            alt="err"
                        />
                        <br></br>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
                            className={styles.favoriteTechImage}
                            alt="err"
                        />
                        <br></br>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                            className={styles.favoriteTechImage}
                            alt="err"
                        />
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" 
                            className={styles.favoriteTechImage}    
                            alt="err"
                        />
                    </div>
                </div>
                <div className={styles.moreSkillsDiv}>
                    <h2 style={{marginBottom: '-3%'}}>Additional Libraries <br></br>& Frameworks</h2>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" 
                        className={styles.techImage}    
                        alt="err"
                        />

                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                        className={styles.techImage}
                        alt="err"
                        />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    {/* <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg"
                        className={styles.techImage}
                    /> */}
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    {/* <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                        className={styles.techImage}
                    /> */}
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg" 
                        className={styles.techImage}
                        alt="err"
                        />
                </div>
            </div>
        </div>
    )
})

export default Skills;