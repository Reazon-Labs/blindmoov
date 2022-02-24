import React from "react";

class Services extends React.Component {
    render() {
        return(

            <section id="services" class="services">
            <div class="container">
      
              <div class="section-title">
                <h2>A propos du produit</h2>
                <h3><span>Un seul</span> produit... <span>Une multitude</span> de possibilités !</h3>
                <p>Ce n'est pas des paires de lunettes ordinaires... non non... c'est des lunettes BlindMoov !</p>
              </div>
      
              <div class="row">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon"><i class="bx bxl-dribbble"></i></div>
                    <h4 class="title"><a href="">Processeur rapide</a></h4>
                    <p class="description">Afin de garantir une réactivité aux obstacles la plus optimale possible</p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon"><i class="bx bx-file"></i></div>
                    <h4 class="title"><a href="">Chargement pratique</a></h4>
                    <p class="description">Sa boite de chargement facilite la charge avec une connectique dédiée</p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon"><i class="bx bx-tachometer"></i></div>
                    <h4 class="title"><a href="">Résistance optimisée</a></h4>
                    <p class="description">Afin que vos lunettes connectées durent le plus longtemps possible</p>
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div class="icon-box">
                    <div class="icon"><i class="bx bx-world"></i></div>
                    <h4 class="title"><a href="">Large champ de balayage</a></h4>
                    <p class="description">3 capteurs GA superbement placés pour balayer un angle de 200°</p>
                  </div>
                </div>
      
              </div>
      
            </div>
          </section>
        )
    }
}


export default Services