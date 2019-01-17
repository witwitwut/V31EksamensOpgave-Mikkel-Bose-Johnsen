import { createNewsView } from "../view/NewsView";



export function setupnewsview(NewsArr){

        let NewsSectionWithNewsBicycleCards = createNewsView(NewsArr)

        const start = document.getElementById('startView')

        start.insertAdjacentHTML('afterend',NewsSectionWithNewsBicycleCards)


        const NewsBtn = document.getElementById("NewsButton")


        
        NewsBtn.addEventListener('click', (event) => {
            if(event.target.matches('.btn')){
                console.log("Her er din knap" , event.target)
                
            }
        })
}