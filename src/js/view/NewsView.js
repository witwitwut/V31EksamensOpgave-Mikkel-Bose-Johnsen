import BicycleCard from "./BicycleCard";


export function createNewsView(NewsArr){
    
    console.log(NewsArr)

    let NewsBicycleCardHTMLSecond = ''
    let NewsBicycleCardHTMLFirst = ''
    let NewsBicycleCardHTMlThird = ''

    let i = 0

    // console.log("virker ikke" ,NewsArr)

    // let NewsArr2= [{'test':'test'}, {test2:'test2'}]

    // console.log(NewsArr2)

    // console.log(NewsArr[0])
    try {
        
    NewsArr.forEach(bicycleObject => {
        console.log(bicycleObject)
        if (i === 0) {
            NewsBicycleCardHTMLFirst += new BicycleCard(bicycleObject).render()
            i++
        } else if(i == 1 || i == 2){

        NewsBicycleCardHTMLSecond += new BicycleCard(bicycleObject).render()
        i++

    }
        
        console.log(NewsBicycleCardHTML)

    });
    
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
        <article class="bg-white py-2">
            <div class=" container my-4">
                <div class="row">
                    <div class="col">
                    ${NewsBicycleCardHTMLFirst}
                    </div>
                    <div class="col-4 d-flex align-content-start flex-wrap">
                        ${NewsBicycleCardHTMLSecond}
                    </div>
                </div>
            </div>
            <div class="container">
                <hr class="my-4">
                <p class="lead d-flex justify-content-center ">
                    <a id="NewsButton" data class="btn border-0 btn-primary btn-lg" href="" role="button">Se Flere Nyheder</a>
                </p>
            </div> 
        </article>
    </section>
    `
}