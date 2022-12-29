import { useState } from 'react';
import './App.css';
//import controller 
import { JsonController } from './players/controllers/jsonController';
import { DbController } from './players/controllers/dbController';
import { ApiController } from './players/controllers/apiController';

function App() {

  const [playersComponent, setPlayersComponent] = useState([]);
  const [timestamp, setTimestamp] = useState();


  const doGetPlayers = async (controller) => {
    const rightNow = new Date();
    setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);
    
    //The following codes don't have to be changed if we want to use different datasources and views as all the controllers have the same methods: load data and render the view (This aspect reflects dependency principle as the controller denpends on abstractions). We can also add other controllers if needed. This applied the open/closed principle.

    await controller.loadData();
    setPlayersComponent(controller.render())
    }

  const doPlayersClear = () => {
    setTimestamp('');
    setPlayersComponent();
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <span className="last-accessed">{timestamp}</span>
        <div className='container'>
          <div className='buttons'>
            <button onClick={() => doGetPlayers(new JsonController())}>
              Load Players Json
            </button>
            <button onClick={() => doGetPlayers(new DbController())}>
              Load Players DB
            </button>
            <button onClick={() => doGetPlayers(new ApiController())}>
              Load Players API
            </button>
            <button onClick={() => doPlayersClear()}>
              Clear Players
            </button>
          </div>
          <div className={'players-list'}>
            {playersComponent}
          </div>
        </div>
      </header>
    </div>
  );
  }

export default App;
