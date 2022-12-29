import { DataFromDatabase } from "../datasources/fromDataBase";
import { PlayersComponent } from "../views/playersComponent";

export class DbController{
    constructor(){
        this.data = null
    } //before loading data

    //data load
    loadData = async()=>{
        const data = await new DataFromDatabase().getData();
        this.data = data;

        return this;
    }

    render = ()=>{
        return <PlayersComponent players = {this.data}/>
    }
}