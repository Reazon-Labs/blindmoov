import React from "react";

class Pricing extends React.Component {
    render() {
        return(
            <section id="pricing" class="pricing">
            <div class="container">
      
              <div class="section-title">
                <h2>Boutique en ligne</h2>
                <h3>Notre <span>boutique</span> !</h3>
                <p>Intéressé par notre produit et impatient de l'acheter ? Vous êtes au bon endroit !</p>
              </div>
      
              <div class="row">
      
                <div class="col-lg-6 col-md-6">
                  <div class="box">
                    <h3>BlindMoov Fokus Lite</h3>
                    <h4>??? €<span> / Garanti 2 ans</span></h4>
                    <ul>
                      <li>Batterie 500mAh</li>
                      <li>Détection d'obstables</li>
                      <li>Chargeur ChargeToGo inclus</li>
                      <li>Support d'assistance technique</li>
                      <li>Capteur frontal (Grand Angle)</li>
                      <li class="na">Capteurs latéraux (Grand Angle)</li>
                      <li class="na">Bouton Easyfind</li>
                      <li class="na">Champ de brassage de 200°</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
                  <div class="box recommended">
                    <span class="recommended-badge">Recommandé</span>
                    <h3>BlindMoov Fokus Pro</h3>
                    <h4>??? €<span> / Garanti 2 ans</span></h4>
                    <ul>
                      <li>Batterie 500mAh</li>
                      <li>Détection d'obstables</li>
                      <li>Chargeur ChargeToGo inclus</li>
                      <li>Support d'assistance technique</li>
                      <li>Capteur frontal (Grand Angle)</li>
                      <li>Capteurs latéraux (Grand Angle)</li>
                      <li>Bouton Easyfind</li>
                      <li>Champ de brassage de 200°</li>
                    </ul>
                    <div class="btn-wrap">
                      <a href="#" class="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
        )
    }
}

export default Pricing