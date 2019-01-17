import BicycleCard from "./BicycleCard";


export function createNewsView(NewsObject){
    
    console.log(NewsObject)

    let NewsBicycleCardHTML = ''

    // console.log("virker ikke" ,NewsArr)

    // let NewsArr2= [{'test':'test'}, {test2:'test2'}]

    // console.log(NewsArr2)

    // console.log(NewsArr[0])
    try {
        
    // NewsArr.forEach(bicycleObject => {
    //     console.log(bicycleObject)

        NewsBicycleCardHTML = NewsObject.render()
        
        console.log(NewsBicycleCardHTML)

    // });
    
} catch (error) {
        console.error(error)
}
    
    return `
    <section id="newsSection">
        <header class="py-2">
            <div class="container">
                <h2 class="text-black">Nyheder</h2>
            </div>
        </header>
        <div class="bg-white py-2">
            <div class=" container my-4">
                <div class="row">
                    ${NewsBicycleCardHTML}
                </div>
            </div>
            <div class="">
                <hr class="my-4">
                <p class="lead">
                    <a data class="btn border-0 btn-primary btn-lg" href="#" role="button">Se Flere Nyheder</a>
                </p>
            </div> 
        </div>
    </section>
    `
}