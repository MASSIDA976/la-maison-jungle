/*Ce composant gère l'escalier de soin des plantes
   Nous utilisons les "propos" pour récupérer
   des informations situées dans le <CareScale/> ;
   Le "props" doit être déclaré dans le composant
*/

function CareScale(props) {
    const lumiere = props.lumiere;
    const typePlante =props.typePlante;

    //const {lumiere, typePlante} = props;

    const nbEscalier = [1, 2, 3];

    /*
    <CareScale lumiere = {plante.light} typePlante= 'lumiere'/>
    <CareScale lumiere = {plante.water} typePlante= 'eau'/>
    */

    const typeDeCulture = typePlante === 'lumiere' ? 'lumière': 'Eau'

    return (
        <div>
            {nbEscalier.map((marcheEscalier) =>(
                lumiere >= marcheEscalier ? <span key={nbEscalier.toString()}>{typeDeCulture}</span> : null
                
            ))}
        </div>
        )

        

}

    

export default CareScale