import styles from './Skills.module.css'

import { forwardRef } from 'react'

const Skills = forwardRef(({ skillsRef }) => {

    return (
        <div ref={skillsRef} className={styles.skillsWrapperDiv}>
            <h1 className={styles.skillsH1}>Skills</h1>
            <div className={styles.favoriteSkillsDiv}>
                <h2 className={styles.divTitle} style={{paddingTop: '1.5%', paddingBottom: '0'}}>Favorite Tech</h2>
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
            <div className={styles.skillsDiv}>
                <div className={styles.moreSkillsDiv}>
                    <h2 className={styles.divTitle}>Libraries, Frameworks, & Beyond</h2>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" 
                        className={`${styles.moreSkillsTechImage}`}
                        alt="err"
                        style={{scale: '1.25', marginRight: '2%'}}
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                        className={`${styles.moreSkillsTechImage}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
                        alt="err"
                        className={`${styles.moreSkillsTechImage}`}
                        style={{scale: '2', marginRight: '8%'}}
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
                        className={`${styles.moreSkillsTechImage}`}
                        alt="err"
                        style={{scale: '1.4'}}
                    />
                    <br></br>
                    <br></br>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
                        className={`${styles.moreSkillsTechImage} ${styles.techImageUp}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" 
                        className={`${styles.moreSkillsTechImage} ${styles.techImageUp}`}
                        alt="err"
                        style={{scale: '1.4'}}
                    />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
                        className={`${styles.moreSkillsTechImage} ${styles.techImageUp}`}
                        alt="err"
                    />
                    <br></br>
                    <br></br>
                    <br></br>
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
                    <h2 className={styles.divTitle} style={{margin: '2% auto'}}>More Tools</h2>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" 
                        className={`${styles.toolsTechImage} ${styles.techImageWide}`}
                        alt="err"
                    />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" 
                        className={`${styles.toolsTechImage} ${styles.techImageWide}`}
                        alt="err"
                        style={{scale: '1.3'}}
                    />
                    <br></br>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
                        className={`${styles.toolsTechImage} ${styles.techImageWide}`}
                        alt="err"
                        style={{scale: '1.15'}}
                        />
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
                        className={`${styles.toolsTechImage} ${styles.techImageWide}`}
                        alt="err"
                    />
                    <br></br>
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg" 
                        alt="err"
                        className={`${styles.toolsTechImage} ${styles.techImageUp}`}
                        style={{scale: '2.25', marginRight: '5%'}}
                    />
                </div>
            </div>
        </div>
    )
})

Skills.displayName = 'Skills'

export default Skills;