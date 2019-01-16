import { createHeaderView } from "./view/HeaderView";
import { createFooterView } from "./view/FooterView";
import { GetJsonObject } from "./model/Api";
import BicycleCard from "./view/BicycleCard";
import NewsController from "./Controller/NewsController";


class App{
    constructor(){

        document.body.insertAdjacentHTML('afterbegin',createHeaderView())

        let bicycleArr = []

       GetJsonObject("http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/posts").then(response => response.json().then(arr => arr.forEach(bicycle => {
                bicycleArr.push(new BicycleCard(bicycle))          
        })))

        const newssection = new NewsController().setupnewsview(bicycleArr)
        
        // console.log(newssection)

        document.body.insertAdjacentHTML('beforeend', createFooterView())
    }
}

document.addEventListener('DOMContentLoaded', () => new App())