import BicycleCard from "./BicycleCard";


export function createNewsView(NewsArr){
    
    let NewsBicycleCardHTML = ''

    console.log("virker ikke" ,NewsArr)

    let NewsArr2= [{'test':'test'}, {test2:'test2'}]

    console.log(NewsArr2)
    // NewsArr2.forEach(bicycleObjet => {
        // console.log(bicycleObjet)

        // NewsBicycleCardHTML += new BicycleCard(bicycleObjet).render()

    // });
    
    return `
    <section id="favoriteSection">
        <header class="py-2">
            <div class="container">
                <h2 class="text-black">Nyheder</h2>
            </div>
        </header>
        <div class="bg-dark py-2">
            <div class=" container my-4">
                <div class="row">
                    ${NewsBicycleCardHTML}
                </div>
            </div>
        </div>
    </section>
    `
}