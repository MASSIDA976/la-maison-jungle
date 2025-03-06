import '../styles/Banner.css';
import logo from '../assets/logo.png';
import { Children } from 'react';
// Je crée mon composant Banner <Banner />
function Banner({children}) {
    let titre = "la maison du jungle"
    return (
        /*l'attribut "className" permet d'attribuer une classe a mon élement
           En HTML, on utilise l'attribut "class".
           En REACT, on utilise l'attribut "classeName"
           */
        <div className="lmj-banner">
            {children}
        </div>

    )    
}

// J'exporte mon composant Banner <Banner />
export default Banner;