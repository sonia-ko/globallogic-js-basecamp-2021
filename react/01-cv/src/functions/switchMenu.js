
let menuOpened = false;
 

function switchMenu() {
  const menuIcon = document.querySelector(".menu-container");
  if (menuOpened === false) {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("main").style.marginLeft = "50%";
    menuOpened = true;
    menuIcon.classList.toggle("change");
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    menuOpened = false;
    menuIcon.classList.toggle("change");
  }
}

export default switchMenu;