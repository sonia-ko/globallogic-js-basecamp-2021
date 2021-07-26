import skillHtml from './../imgs/skills/html.png';
import skillCss from './../imgs/skills/css.png';
import skillJS from './../imgs/skills/js.png';
import skillGit from './../imgs/skills/git-icon.png';
import skillJira from './../imgs/skills/jira.jpg';
import skillSQL from './../imgs/skills/sql-icon-tra.png';

function Skills(){
    return(
        <section className="section skills-section">
        <h3>My skills:</h3>
        <div className="container-skills-images">
        <img className="skill-icons" src={skillHtml} alt="HTML icon" />
        <img className="skill-icons" src={skillCss} alt="CSS icon" />
        <img className="skill-icons" src={skillJS} alt="JS icon" />
        <img className="skill-icons" src={skillGit} alt="Git icon" />
        <img className="skill-icons" src={skillJira} alt="Jira icon" />
        <img className="skill-icons" src={skillSQL} alt="" />
      </div>
    </section>
    )
}

export default Skills;