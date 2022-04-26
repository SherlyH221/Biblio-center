export class Course {
    id : number ;
    title : string ;
    details : string ;
    img : string ;
    moreDetails : string ;
    price : string ;
    duration : string ;

    constructor(id:number,title:string,details:string,img : string, moreDetails : string ,price : string , duration : string ){
        this.id = id ;
        this.title = title ;
        this.img = img ;
        this.details = details ;
        this.moreDetails = moreDetails ;
        this.price = price ;
        this.duration = duration ;
    }
 }