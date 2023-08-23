import styles from './Skills.module.css'

import { forwardRef } from 'react'

const Skills = forwardRef(({ skillsRef }) => {

    return (
        <div ref={skillsRef} className={styles.technicalSkillsWrapper}>
            <h1 className={styles.technicalSkillsH1}>Skills</h1>
            <div className={styles.favoriteSkillsDiv}>
                <h2 className={styles.divTitle}>Favorite Tech</h2>
                <div className={styles.favoriteSkillsIconsDiv}>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        className={styles.favoriteTechImage}
                        alt="err"
                        // style={{marginRight: '15%'}}
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
                        className={`${styles.favoriteTechImage} ${styles.techImageUp}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
                        className={styles.favoriteTechImage}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                        className={`${styles.favoriteTechImage} ${styles.techImageUp}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" 
                        className={styles.favoriteTechImage}    
                        alt="err"
                    />
                </div>
            </div>
            <div className={styles.technicalSkillsDiv}>
                <div className={styles.moreSkillsDiv}>
                    <h2 className={styles.divTitle}>Libraries, Frameworks, and More</h2>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                        className={`${styles.techImage} ${styles.techImageUp}`}
                        alt="err"
                    />

                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
                        alt="err"
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        style={{scale: '1.75'}}
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
                        className={`${styles.techImage} ${styles.techImageUp}`}
                        alt="err"
                    />
                    <br></br>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageUp}`}
                        alt="err"
                        />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                        />
                    {/* <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg"
                        className={styles.techImage}
                    /> */}
                    {/* <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                        className={styles.techImage}
                    /> */}
                </div>
                <div className={styles.toolsDiv}>
                    <h2 className={styles.divTitle}>More Tools</h2>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageUp}`}
                        alt="err"
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                    />
                    <br></br>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg" 
                        alt="err"
                        className={`${styles.techImage} ${styles.techImageUp}`}
                        style={{scale: '2', marginRight: '5%'}}
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" 
                        className={`${styles.techImage} ${styles.techImageDown}`}
                        alt="err"
                        />
                </div>
            </div>
        </div>
    )
})

Skills.displayName = 'Skills'

export default Skills;