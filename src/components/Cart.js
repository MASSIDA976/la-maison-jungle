
import '../styles/cart.css'


    function Cart() {
        const monsteraPrice = 8
        const ivyPrice = 10
        const flowerPrice = 15

        const mapFleur = new Map();

        mapFleur.set("age", 14);

        console.log("Map Fleur: ", typeof mapFleur);
        console.log(mapFleur.get("age"));

        console.log(mapFleur);
        
        const tableauFleur = ["Tulipe", "Rose", "Anfou"];

        let fleurMajiscule = tableauFleur.map((fleur) => fleur.toLocaleUpperCase());
        console.log(fleurMajiscule);
        console.log(fleurMajiscule[0]);

        //liste des articles
        return (
         <div className='"imj-cart'>
            <h2>Panier</h2>
            <ul>
            <li>Monstrera : {monsteraPrice}€</li>
             <li>Lierre : {ivyPrice}€</li>
             <li>Fleurs : {flowerPrice}€</li>
            </ul>
             Total : {monsteraPrice + ivyPrice + flowerPrice}€
         </div>)
    }
    export default Cart;