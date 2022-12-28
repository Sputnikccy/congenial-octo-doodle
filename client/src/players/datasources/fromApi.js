export class DataFromApi{
    async getData(){
        const playersResponse = await fetch('api/getPlayersFromFile/.%2Fdata%2Fplayerdata.json', 
        {
            headers: {
                'accept': 'application/json'
              }
        })
        const players = JSON.parse(await playersResponse.json());

        return players
    }
}
