export function PlayersComponent({players}) {
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

//This part is only for rendering, applying the single responsibility principle.
