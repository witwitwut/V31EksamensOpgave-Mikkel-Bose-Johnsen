import { createHeaderView } from "./view/HeaderView";
import { createFooterView } from "./view/FooterView";
import { GetJsonObject } from "./model/Api";
import BicycleCard from "./view/BicycleCard";
import { setupnewsview } from "./Controller/NewsController";
import { createNewsView } from "./view/NewsView";


class App{
    constructor(){

        document.body.insertAdjacentHTML('afterbegin',createHeaderView())

        
        GetJsonObject("http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/posts")
            .then(response => response.json()
                .then(arr =>
                    
                                        
                    setupnewsview(arr)                    
                    // forEach(bicycle => {
                        // const foo = new BicycleCard(bicycle)
                        // createNewsView(foo)
                        //     },
                        // )
                    )

                )

    

       
        // console.log(newssection)

        document.body.insertAdjacentHTML('beforeend', createFooterView())
    }
}

document.addEventListener('DOMContentLoaded', () => new App())