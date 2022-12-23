const fs = require('fs').promises;

const express = require('express');
const app = express();
const PORT = 3030; //3030 Repeater here...

app.use(express.json());

app.get('/health', (req, res) => {
    //To verify the server is working correctly...
    //curl localhost:PORT/health -I
    res.status(204).send(); //204 No Content
});

app.get('/api/getPlayersFromFile/:filename', async (req, res) => {
    res.json(await fs.readFile(req.params.filename, 'utf-8'));
})

app.post('/ui/getApiRenderResponseDisplay', (req, res) => {
    const players = req.body;

    res.set('Content-Type', 'text/html');
    const list = (players.map((player, i) => {
        return `<li key=${i}> \
            <ul> \
              <li class="${player.name}"}>${player.name}</li> \
              <li>${player.age}</li> \
              <li>${player.job}</li> \
              <li>${player.salary}</li> \
            </ul> \
          </li>`;
      }));
      res.send(list);
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})



