import { createNewsView } from "../view/NewsView";



export default class NewsController{

    setupnewsview(NewsArr){

        let NewsSectionWithNewsBicycleCards = createNewsView(NewsArr)

        document.body.insertAdjacentHTML('beforeend',NewsSectionWithNewsBicycleCards)

    }
}