import React from "react";

class Faq extends React.Component {
    render() {
        return(
            <section id="faq" class="faq">
            <div class="container">
      
              <div class="section-title">
                <h2>F.A.Q</h2>
                <h3><span>Assistance</span> rapide !</h3>
                <p>Ici sont recensés les problèmes d'ordre non-technique réccurents afin que vous puissiez les résoudre seul</p>
              </div>
      
              <ul class="faq-list">
      
                <li>
                  <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">Ma boite a lunettes ne recharge plus. que faire ?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Réponse 1
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Mes lunettes detectent mal les obstacles. quelle solution ?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Réponse 2
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">Je n'entends pas le signal audio quand l'appareil à détécté un obstable. Que faire ?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Réponse 3
                    </p>
                  </div>
                </li>
      
                <li>
                  <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">Le mode d'emploi papier fourni avec la boite est introuvable, comment faire ?<i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
                  <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                    <p>
                      Réponse 4
                    </p>
                  </div>
                </li>
              </ul>
      
            </div>
          </section>
        )
    }
}

export default Faq