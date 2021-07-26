import project1 from './../imgs/project1.png';
import project2 from './../imgs/project2.png';
import project3 from './../imgs/project3.png';

import ProjectImgRight from './ProjectImgRight';
import ProjectImgLeft from './ProjectImgLeft';

function MyProjects(){
    return  (<section
    id="projects"
    className="section projects-section about-us-section-img"
  >
    
    <h2>My projects:</h2>

    <ProjectImgRight classes={'about-section img-right'} picture={project1} title={'nixor.com.ua'} text={'A commercial website created with HTML, CSS and Javascript.'}> </ProjectImgRight>

    <ProjectImgLeft classes={'about-section img-left col-2-left'} picture={project2} title={'educational projects'} text={'Several education projects created during the period of learning Javascript. They can be found in my Github repositories'}> </ProjectImgLeft>
    
    <ProjectImgRight classes={'about-section img-right hidden col-2-right'} picture={project2} title={'educational projects'} text={'Several education projects created during the period of learning Javascript. They can be found in my Github repositories'}> </ProjectImgRight>

    <ProjectImgRight classes={'about-section img-right'} picture={project3} title={'facadeservice.com and bus-transport.com.ua'} text={'WordPress websites created with Elementor plugin.'}> </ProjectImgRight>

     
  </section>)
}

export default MyProjects;
