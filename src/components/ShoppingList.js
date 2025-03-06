// Le composant ShoppingList va regrouper ma liste de courses
import { planteListe } from "../data/planteListe";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";



function ShoppingList() {
    // Crée une liste de courses sous forme de tableau
    let listeCourse = ["monstera", "rosier", "acacier", "palmier"]; 
    //Je crée un tableau qui regroupe toutes les catégories des plantes.
   const categories = planteListe.reduce( (cat, plante) =>
        cat.includes(plante.category) ? cat : cat.concat(plante.category),
        []
    );

    console.log("categories plantes :",categories);
   
    return(
        <div>
                <h3>Liste de courses</h3>
            <ul>
                {
                    listeCourse.map( (plante, index) => ( 
                        <li key={`${index}`}> {index} - {plante}</li>
                    ))
                }
            </ul>
            
            <h3> Nouvelle liste</h3>
            {/*Je veux afficher la categories de la plante.
                Et pour cela je veux utiliser quelle méthode?
            */}
            <ul>
                {
                    categories.map((category) => ( 
                        <li key={category}> {category}</li>
                    ))
                }
            </ul>
            <h3>Nouvelle liste plante</h3>
                <ul className="lmj-plant-list">
                {
                    planteListe.map((plante) => ( 

                        <li className= "lmj-plant-item" key={plante.id} >

                        {plante.name}
                        <CareScale lumiere ={plante.light} typePlante= 'lumiere'/>
                        <CareScale lumiere = {plante.water}typePlante= 'eau'/>

                        </li> 
                    ))
                    }
                </ul>
         

        </div>
    );

}

export default ShoppingList;