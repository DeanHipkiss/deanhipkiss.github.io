class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbarContainer">
                <div class="contentWidth">
                    <div class="navbar">
                        <a href="#">
                            <div class="navbarLogo">
                                <img src="images/DH-Logo.png" alt="Small Logo">
                            </div>
                        </a>
                        <div class="hideMobile">
                            <ul class="nav-links">
                                <li><a href="#">Home</a></li>
                                
                                <li class="dropdown">
                                    <a href="#">Pages</a>
            
                                <ul class="dropdown-menu">
                                        <li>&nbsp;</li>
                                        <li><a href="#picture">Picture & Text</a></li>
                                        <li><a href="#text">Text & Picture</a></li>
                                        <li><a href="#plain">Plain Background</a></li>

                                    </ul> 
                                </li>
            
                                <li><a href="#background">Background Page</a></li>
                                <li><a href="#contact">Contact us</a></li>
                            </ul>

                        </div>
                        <div class="hideDesktop">
                            <div class="hamburger">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div id="sidenav" class="sidenav">
            <div class="sidebaveTop">
                <div class="sidenavTitle">DH</div>
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            </div>
            
            <a class="sidenavLink" href="#">Home</a>
            <a class="sidenavLink"href="#picture">Picture & Text</a>
            <a class="sidenavLink"href="#text">Text & Picture</a>
            <a class="sidenavLink"href="#plain">Plain Background</a>
            <a class="sidenavLink"href="#background">Background Page</a>
            <a class="sidenavLink"href="#contact">Contact us</a>
        </div>
      `;

    }
  
    

}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidenav = document.querySelector('.sidenav');

    hamburger.addEventListener('click', () => {
        openNav();
    });

    sidenav.addEventListener('click', () => {
        closeNav();
    });

});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.querySelector('.sidenav').style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.querySelector('.sidenav').style.width = "0px";
}
    
customElements.define('header-component', Header);