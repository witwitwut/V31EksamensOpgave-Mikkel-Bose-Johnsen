import BicycleCard from "./BicycleCard";


export function createNewsView(NewsArr){
    
    let NewsBicycleCardHTML = ''

    console.log("virker ikke" ,NewsArr)

    let NewsArr2= [{'test':'test'}, {test2:'test2'}]

    console.log(NewsArr2)

    console.log(NewsArr[0])
    try {
        
    NewsArr.forEach(bicycleObject => {
        console.log(bicycleObject)

        NewsBicycleCardHTML += new BicycleCard(bicycleObject).render()


    });
    
} catch (error) {
        console.error(error)
}
    
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