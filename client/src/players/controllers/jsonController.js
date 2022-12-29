import {DataFromJson}  from "../datasources/fromJson";
import { PlayersComponent } from "../views/playersComponent";


export class JsonController{
    constructor(){
        this.data = null;
    }  //before loading data

    //data load
    loadData = async ()=>{
        const data = await new DataFromJson().getData();
        this.data = data;

        return this
    }

    render = ()=>{
        return <PlayersComponent players={this.data}/>
    }
    
}