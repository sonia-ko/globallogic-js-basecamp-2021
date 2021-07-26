

import AvatarContainer from './AvatarContainer';
import AboutParagraph from './AboutParagraph';
import Skills from './Skills';
import StrongSides from './StrongSides';

function AboutMe(){
    return <div>

    <section id="about" className="section paragraph-section about-section">

      <AvatarContainer/>

      <AboutParagraph/>

    </section>

    <Skills/>

    <StrongSides/>

    </div>
}

export default AboutMe;