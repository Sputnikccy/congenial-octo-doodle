import queryForPlayers from "./PlayersDb";

const readPlayers = (source, fileName) => {
    switch(source) {
        case 'db':
            return readPlayersFromDatabase();
        case 'json':
            return readPlayersFromJsonString();
        case 'file':
            return '';
        default:
            throw new Error('Unknown data source?');
    }
}

const readPlayersFromJsonString = () => {
    return '[{"name":"Jonas Valenciunas","age":26,"job":"Center","salary":"4.66m"},{"name":"Kyle Lowry","age":32,"job":"Point Guard","salary":"28.7m"},{"name":"Demar DeRozan","age":28,"job":"Shooting Guard","salary":"26.54m"},{"name":"Jakob Poeltl","age":22,"job":"Center","salary":"2.704m"}]';
}

const readPlayersFromDatabase = () => {
    return queryForPlayers();
}

const displayPlayersFromDatabase = (players) => {
    return players.map((player, i) => {
        return (
          <li key={i}>
            <ul>
              <li className={"player-name"}>{player.name}</li>
              <li>{player.age}</li>
              <li>{player.job}</li>
              <li>{player.salary}</li>
            </ul>
          </li>
        )
      })
}
const displayPlayersFromJson = (players) => {
    return players.map((player, i) => {
        return (
          <li key={i}>
            <ul>
              <li className={"player-name"}>{player.name}</li>
              <li>{player.age}</li>
              <li>{player.job}</li>
              <li>{player.salary}</li>
            </ul>
          </li>
        )
      })
}
const displayPlayersFromApi = (players) => {
   
}


export { readPlayers,
    readPlayersFromJsonString ,
    readPlayersFromDatabase ,
    displayPlayersFromJson ,
    displayPlayersFromDatabase ,
    displayPlayersFromApi }


