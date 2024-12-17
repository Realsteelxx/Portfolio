import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-pic-removebg-preview.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkdinLight from '../../assets/linkedin-light.svg';
import linkdinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/404-NotFound.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkdinIcon = theme === 'light' ? linkdinLight :linkdinDark ;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>  
        <img className={styles.hero} src={heroImg} alt="Profile picture of Yuthika Viduranga" />
        <img className={styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
            Yuthika <br/> Viduranga
        </h1>
        <h2>Devops Engineer</h2>
        <span>
         
          <a href='https://github.com/Realsteelxx' target='_blank'>
            <img src={githubIcon} alt="Github icon"/>
          </a>
          <a href='https://www.linkedin.com/in/yuthika-viduranga-aa6b57306/' target='_blank'>
            <img src={linkdinIcon} alt="Linkdin icon"/>
          </a>
        </span>
        <p className={styles.description}>with a passion for technology, programming, and learning,particularly in the DevOps field.</p>
        <a href={CV} download>
          <button className='hover' >Resume</button>
        </a>


      </div>
    </section>
  );
}

export default Hero;
