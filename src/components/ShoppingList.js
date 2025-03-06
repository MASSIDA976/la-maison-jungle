// Le composant ShoppingList va regrouper ma liste de courses
import { planteListe } from "../data/planteListe";
import "../styles/ShoppingList";
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
                    <li Key={`${index}`}> {index} - {plante}</li>
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
         <ul>
             {
                planteListe.map((plante) => ( 
                    <li key={plante.id}> {plante.name} - {plante.category} </li> 
                ))
                }
            </ul>
         

        </div>
    );

}

export default ShoppingList;