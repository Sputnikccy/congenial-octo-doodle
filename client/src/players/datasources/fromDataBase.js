import queryForPlayers from "../../PlayersDb";

export class DataFromDatabase{
    getData(){
        return new Promise((resolve, reject)=>{
            
                resolve(queryForPlayers())
            
        })
    }
}

//This part is only for getting data, applying the single responsibility principle.