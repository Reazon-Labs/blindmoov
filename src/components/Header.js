import React from "react";
import logo from "../img/logo.png";

class Header extends React.Component {
    render() {
        return(
          <header id="header" class="fixed-top d-flex align-items-center  header-transparent ">
            
          <div class="container d-flex align-items-center justify-content-between">

          <a class="logo"><img src={logo} alt="BlindMoov Logo" class="img-fluid" /></a>

            <nav id="navbar" class="navbar">
              <ul>
                <li><a class="nav-link scrollto active" href="#hero">Accueil</a></li>
                <li><a class="nav-link scrollto" href="#about">A propos</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li><a class="nav-link scrollto" href="#team">L'équipe</a></li>
                <li><a class="nav-link scrollto" href="#faq">Assistance</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li class="dropdown"><a href="#"><span>Plus</span> <i class="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">Mode d'emploi</a></li>
                    <li class="dropdown"><a href="#"><span>Langues</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Français</a></li>
                  </ul>
                  </li>
                    <li><a href="#">CGU</a></li>
                    <li><a href="#">CGV</a></li>
                  </ul>
                </li>
                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
        )
    }
}


export default Header