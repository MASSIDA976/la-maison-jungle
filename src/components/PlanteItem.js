// dans ce coposant <PlanteItem />, on va gerer chaque plante de manière individuel

function PlanteItem({name, id, water, light}) {
    return(
        <li classeName="lmj-plant-item">
            <img classeName="lmj-plant-item-cover" 
                src="" alt={`${name}`}/>
            {name}

            <div>
                <CareScale typeDeCulture={water} typePlante="eau"/>
                <CareScale typeDeCulture={light} typePlante="lumiere"/>

            </div>
        </li>
    )
}

export default PlanteItem;