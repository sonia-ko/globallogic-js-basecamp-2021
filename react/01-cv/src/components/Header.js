import Menu from './Menu.js'
import SideMenu from './SideMenu';
import SocialLinks from './SocialLinks';

function Header(props){
    return <div className="header">
       
      <Menu/>

      <SideMenu/>

      <header id="main">
        <h1>Sofia Kozytska</h1>
        
        <SocialLinks/>

      </header>
    </div>


}

export default Header;