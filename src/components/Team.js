import React from "react";
import head from "../img/team/team-1.png";

class Team extends React.Component {
    render() {
        return(
            <section id="team" class="team">
            <div class="container">
      
              <div class="section-title">
                <h2>L'équipe BlindMoov</h2>
                <h3>Découvrez notre <span>équipe</span> !</h3>
                <p>Découvrons ensemble les fondateurs du projet et ce qu'il font</p>
              </div>
      
              <div class="row">
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <div class="member-img">
                    <img src={head} alt="Yohann Barniaud" class="img-fluid" />
                      <div class="social">
                        <a href=""><i class="bi bi-discord"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Yohann Barniaud</h4>
                      <span>Chef de Projet | Secteur technique / développement</span>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <div class="member-img">
                    <img src={head} alt="Bilal Benyagoub" class="img-fluid" />
                      <div class="social">
                        <a href=""><i class="bi bi-discord"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Bilal Benyagoub</h4>
                      <span>Responsable secteur communication / réseaux</span>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="member">
                    <div class="member-img">
                    <img src={head} alt="Ilyes Bendebra" class="img-fluid" />
                      <div class="social">
                        <a href=""><i class="bi bi-discord"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                      </div>
                    </div>
                    <div class="member-info">
                      <h4>Ilyes Benbedra</h4>
                      <span>Responsable secteur économique / conception</span>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
}

export default Team