import queryForPlayers from "../../PlayersDb";

export class DataFromDatabase{
    getData(){
        return new Promise((resolve, reject)=>{
            
                resolve(queryForPlayers)
            
        })
    }
}