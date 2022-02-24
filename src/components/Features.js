import React from "react";

class Features extends React.Component {
    render() {
        return(
          <section id="features" class="features">
          <div class="container">
    
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6 col-6">
                <div class="icon-box">
                  <i class="ri-scan-2-fill"></i> 
                  <h3>Détection d'obstacles</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <div class="icon-box">
                  <i class="ri-volume-vibrate-fill"></i> 
                  <h3>Système de vibration</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4 mt-md-0">
                <div class="icon-box">
                  <i class="ri-broadcast-fill"></i> 
                  <h3>Bouton Easyfind</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4 mt-lg-0">
                <div class="icon-box">
                  <i class="ri-camera-lens-fill"></i> 
                  <h3>Capteurs Grand Angle</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4">
                <div class="icon-box">
                  <i class="ri-star-fill"></i> 
                  <h3>Kit de nettoyage inclus</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4">
                <div class="icon-box">
                  <i class="ri-battery-2-charge-fill"></i> 
                  <h3>Chargeur portable inclus</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4">
                <div class="icon-box">
                  <i class="ri-open-arm-fill"></i> 
                  <h3>Technologie ChargeToGo</h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mt-4">
                <div class="icon-box">
                  <i class="ri-shield-check-fill"></i> 
                  <h3>Batterie longue durée</h3>
                </div>
              </div>
            </div>
    
          </div>
        </section>  
        )
    }
}

export default Features