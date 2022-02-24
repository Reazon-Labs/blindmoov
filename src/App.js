import React from "react";
import Head from "./components/Head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ.js";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//MAIN CSS FILE
import "./App.css";
//LIBS CSS FILES
import "./vendors/animate.css/animate.min.css";
import "./vendors/aos/aos.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap-icons/bootstrap-icons.css";
import "./vendors/boxicons/css/boxicons.min.css";
import "./vendors/glightbox/css/glightbox.min.css";
import "./vendors/remixicons/remixicon.css";
import "./vendors/swiper/swiper-bundle.min.css";

class App extends React.Component {
    render() {
        return(
            <html>
            <Head />
        
            <body>
                <Header />
                <Hero />
                <main>
                    <About />
                    <Services />
                    <Features />
                    <section id="cta" class="cta">
                        <div class="container">
        
                            <div class="text-center">
                                <h3>BlindMoov passe au vert</h3>
                                <p>Désormais, environ 70% de notre armature en plastique renforcé est issu du recyclage</p>
                                <a class="cta-btn" href="#pricing">Acheter le produit</a>
                            </div>
                        </div>
                    </section>
                    <Pricing />
                    <FAQ />
                    <Team />
                    <Contact />
                </main>
                    <Footer />

                    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
            </body>
        </html>
        )
    }
}

export default App