import { DataFromApi } from "../datasources/fromApi";
import {PlayersInnerHTML} from "../views/playersInnerHTML"

export class ApiController{
    constructor(){
        this.data = null;
    } //before loading data

    //data load
    loadData = async()=>{
        const data  = await new DataFromApi().getData();
        this.data = data;
        console.log(data)
        return this
    } 
    //The data source is changeable and replaceable, but will not influence the logic: apply Liskov substitution principle.

    render = ()=>{
        return <PlayersInnerHTML players = {this.data}/>
    }
}

