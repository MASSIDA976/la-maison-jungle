import '../styles/Banner.css'
import logo from '../assets/logo.png'
// Je crée mon composant Banner <Banner />
function Banner() {
    let titre = "la maison du jungle"
    return (
        /*l'attribut "className" permet d'attribuer une classe a mon élement
           En HTML, on utilise l'attribut "class".
           En REACT, on utilise l'attribut "classeName"
           */
        <div className="lmj-banner">
            <img src={logo} alt="logo de la maison jungle" className="lmj-logo"/>
            <h1>{titre.toUpperCase()}</h1>
        </div>

    )    
}

// J'exporte mon composant Banner <Banner />
export default Banner;