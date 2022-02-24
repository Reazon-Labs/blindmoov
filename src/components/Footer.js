import React from "react";
import logo from "../img/logo.png"

class Footer extends React.Component {
    render() {
        return(
            <footer id="footer">
            <div class="container">
                <img src={logo} alt="BlindMoov Logo" class="img-fluid" />
              <p>Propulsé par BlindMoov Technologies</p>
              <div class="social-links">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
              <div class="copyright">
                © Copyright <strong>Blindmoov</strong>. Tous droits réservés 
              </div>
              <div class="credits">
                Développé en <a href="https://fr.reactjs.org/">React</a> <a href="https://getbootstrap.com/">Bootstrap</a> par la <a href="https://github.com/Reazon-Team">Reazon-Team</a>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer