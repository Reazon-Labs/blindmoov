import React from "react";

class About extends React.Component {
    render() {
        return(
            
            <section id="about" class="about">
                <div class="container">
      
                    <div class="section-title">
                        <h2>A propos de nous</h2>
                        <h3>BlindMoov, <span>c'est quoi</span> ?</h3>
                        <p>Découvrez pourquoi BlindMoov à vu le jour et à quoi il contribue</p>
                    </div>
      
                    <div class="row content">
                        <div class="col-lg-6">
                            <p>
                                BlindMoov est un projet conçu par trois étudiants en éléctrotechnique, le projet à pour but d'aider les personnes malvoyantes 
                                au quotidien en leurs proposant une paire de lunettes qui detectent les obstacles à proximité et les guident dans leurs déplacements. 
                                Dotée de trois capteurs focaux de haute precision, nos capteurs étant reliés à un dispositif sonore, plus vous vous rapprochez du danger, 
                                plus ce dernier emmet un signal d'alerte rapidement et fortement afin de prevenir la source de danger. 
                            </p>
                            <ul>
                                <li><i class="ri-check-double-line"></i> Produits de qualité a la finition précise et fiable</li>
                                <li><i class="ri-check-double-line"></i> Produit facile à utiliser, rechargement optimisé</li>
                                <li><i class="ri-check-double-line"></i> Conçu pour résister, durable dans le temps</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                la marque "BlindMoov" viens de "Blind" qui signifie malvoyant/aveugle et "Moov" qui est un terme signifiant le mouvement, le nom signifie 
                                concrétement "Mouvement pour les malvoyants".<br/>
                                <br />
                                Pourquoi BlindMoov ? Pour faire simple, nous nous somme rendus compte que il y'as plus de X Millions de Français atteints de malvoyance (soit XX%), 
                                et que ils sont plus vulnérables quand a leurs propre sécurité, nous avons voulu remedier à ce problème en créeant des produits adaptés à leurs besoins, 
                                c'est ainsi que BlindMoov à vu le jour. 
                            </p>
                            <a href="#" class="btn-learn-more">Continuons !</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About