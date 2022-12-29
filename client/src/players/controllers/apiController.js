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
        
        return this
    } 

    render = ()=>{
        return <PlayersInnerHTML players = {this.data}/>
    }
}