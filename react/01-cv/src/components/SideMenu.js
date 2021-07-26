function SideMenu(){
    return(
        <nav className="side-menu">
        <div id="mySidenav" className="sidenav">
        <button className="nav-item closebtn close-menu-btn">&times;</button>
          <a href="#about" className="nav-item">About</a>
          <a href="#experience" className="nav-item">Education &amp; Work experience</a>
          <a href="#projects" className="nav-item">Projects</a>
        </div>

        
        <div className="menu-container">
          <div className="bar1 menu-icon-bar"></div>
          <div className="bar2 menu-icon-bar"></div>
          <div className="bar3 menu-icon-bar"></div>
        </div>
      </nav>
    )
}

export default SideMenu;