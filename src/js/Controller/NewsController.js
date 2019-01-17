import { createNewsView } from "../view/NewsView";



export function setupnewsview(NewsArr){

        let NewsSectionWithNewsBicycleCards = createNewsView(NewsArr)

        document.body.insertAdjacentHTML('beforeend',NewsSectionWithNewsBicycleCards)

}