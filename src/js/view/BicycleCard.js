
export default class BicycleCard{
    constructor(bicycle){
        this.title = bicycle.title.rendered
        this.content = bicycle.content.rendered
        this.shorttext = bicycle.slug
        this.excerpt = bicycle.excerpt.rendered
        this.link = bicycle.link
        this.image = bicycle.featured_image_src
    }

    render(){
        return `
        <div class="card" >
        <img class="card-img-top" src="${this.image}" >
        <div class="card-body">
            <p class="card-text">${this.shorttext}</p>
        </div>
        </div>
        `
    }
}
