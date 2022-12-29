import {DataFromJson}  from "../datasources/fromJson";
import {PlayersComponent } from "../views/playersComponent";


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
    //The data source is changeable and replaceable, but will not influence the logic: apply Liskov substitution principle.
    

    render = ()=>{
        return <PlayersComponent players={this.data}/>
    }

}