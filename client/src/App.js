import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import {
  readPlayers,
  readPlayersFromJsonString,
  readPlayersFromDatabase,
  displayPlayersFromJson,
  displayPlayersFromDatabase,
  displayPlayersFromApi
} from './Players'

function App() {

  const [players, setPlayers] = useState([]);
  const [timestamp, setTimestamp] = useState();


  const doGetPlayers = async (source, fileName) => {
    const rightNow = new Date();
    setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);

    let players;
    switch (source) {
      case 'json':
        players = JSON.parse(readPlayersFromJsonString());
        setPlayers(displayPlayersFromJson(players))
        break;
      case 'database':
        players = readPlayersFromDatabase();
        setPlayers(displayPlayersFromDatabase(players))
        break;
      case 'api':
        const playersResponse = await fetch('api/getPlayersFromFile/.%2Fdata%2Fplayerdata.json', {
          headers: {
            'accept': 'application/json'
          }
        });
        players = JSON.parse(await playersResponse.json());
        const responseDisplay = await fetch('/ui/getApiRenderResponseDisplay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(players)
        });
        const responseText = await responseDisplay.text();
        const responseArray = JSON.parse(responseText);
        setPlayers(responseArray.join(''));
        break;
    }
  }
  const doPlayersClear = () => {
    setTimestamp('');
    setPlayers([]);
  }

  const doRender = () => {
    if (typeof players === 'object') {
      return (
        <ul>
          {players}
        </ul>
      );
    } else { 
      return (
        <ul dangerouslySetInnerHTML={{__html: players}} />
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="last-accessed">{timestamp}</span>
        <div className='container'>
          <div className='buttons'>
            <button onClick={() => doGetPlayers('json', '')}>
              Load Players Json
            </button>
            <button onClick={() => doGetPlayers('database', '')}>
              Load Players DB
            </button>
            <button onClick={() => doGetPlayers('api', '')}>
              Load Players API
            </button>
            <button onClick={() => doPlayersClear()}>
              Clear Players
            </button>
          </div>
          <div className={'players-list'}>
            {doRender()}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
