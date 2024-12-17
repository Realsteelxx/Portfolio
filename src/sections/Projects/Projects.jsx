import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import burger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import  fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id= "projects" className={styles.container}>
            <h1 className='sectionTitle'> Projects</h1> 
            <div className = {styles.projectsContainer}>
                <ProjectCard src={viberr}
                link = 'https://www.bestlankaengineering.com/'
                h3 = 'Best-Lanka'
                p = 'Web Site'
                />
                <ProjectCard src={burger}
                link = 'https://github.com/Realsteelxx'
                h3 = 'Fresh Burger'
                p = 'Hamburger Resturant'
                />
                <ProjectCard src={hipsster}
                link = 'https://github.com/Realsteelxx'
                h3 = ' Hipsster'
                p = 'Glasses Shop'
                />
                <ProjectCard src={fitlift}
                link = 'https://github.com/Realsteelxx'
                h3 = ' FitLift'
                p = 'Fitness APP'
                />

            </div>
        </section>
  );
}

export default Projects