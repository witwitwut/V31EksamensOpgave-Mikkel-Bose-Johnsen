import BicycleCard from "./BicycleCard";

let NewsBicycleCardUsedlist = []
let NoInsertDuplicateList = []

export function createNewsView(NewsArr){
    
    console.log(NewsArr)

    let NewsBicycleCardHTMLSecond = ''
    let NewsBicycleCardHTMLFirst = ''
   

 
   


    let i = 0

    // console.log("virker ikke" ,NewsArr)

    // let NewsArr2= [{'test':'test'}, {test2:'test2'}]

    // console.log(NewsArr2)

    // console.log(NewsArr[0])
    try {
        
    NewsArr.forEach(bicycleObject => {
        console.log(bicycleObject)
        if (i === 0) {
            NewsBicycleCardUsedlist.push(bicycleObject)
            NewsBicycleCardHTMLFirst += new BicycleCard(bicycleObject).render()

            i++
        } else if (i > 0 && i < 5) {
            NewsBicycleCardUsedlist.push(bicycleObject)
            NewsBicycleCardHTMLSecond += new BicycleCard(bicycleObject).renderSecond()
            i++
            
        } else{

        }
        
        console.log("used", NewsBicycleCardUsedlist)        
        console.log(NewsBicycleCardHTMLSecond)
        console.log(i)

    })
    
    
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
                    <div class="col-6 flex-row">
                    ${NewsBicycleCardHTMLFirst}
                    </div>
                    <div class="col-6 ">
                        <div id="BicykelObejects" class="row">
                                ${NewsBicycleCardHTMLSecond}
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <hr class="my-4">
                <p class="lead d-flex justify-content-center ">
                    <a id="NewsButton" data class="btn border-0 btn-primary btn-lg"  role="button">Se Flere Nyheder</a>
                </p>
            </div> 
        </article>
    </section>
    `
}

export function insertIntoNews(NewsArr){
    
    let InsertHTML = ''
    const AddedHTML = document.getElementById('BicykelObejects')
    
    try {
        
        NewsArr.forEach(bicycleObject => {
           
            if (!NewsBicycleCardUsedlist.find(x => x.id === bicycleObject.id )) {
                if (!NoInsertDuplicateList.find(x => x.id === bicycleObject.id)) {
                    NoInsertDuplicateList.push(bicycleObject)
                    InsertHTML += new BicycleCard(bicycleObject).renderSecond()                    
                }                
            }    
        })
    }
    catch(error){
        console.error(error)
    }

    return AddedHTML.insertAdjacentHTML('beforeend', InsertHTML)
}