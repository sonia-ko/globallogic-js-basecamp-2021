import emailImg from './../imgs/email.png';
import linkedInImg from './../imgs/linkedin.png'
import gitIcon from './../imgs/github.png';

function SocialLinks(){
    return(
        <ul className="social-links">
          <li>
            <a href="mailto:sonya-ko@outlook.com?&subject=Hi%20Sonia!"
              ><img className="icon" src={emailImg} alt=""
            /></a>
          </li>
          <li>
            <a
              target="_blank" rel="noreferrer"
              href="https://www.linkedin.com/in/sonya-kozytska-357072167/"
            >
              <img className="icon" src={linkedInImg} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/sonia-ko"
              ><img className="icon" src={gitIcon} alt=""
            /></a>
          </li>
        </ul>
    )
}

export default SocialLinks;