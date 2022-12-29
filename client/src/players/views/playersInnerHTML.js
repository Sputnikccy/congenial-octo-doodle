import { useEffect, useState } from "react";

export function PlayersInnerHTML({ players }) {
  const [html, setHtml] = useState();
  useEffect(() => {
    const fetchUI = async () => {
      const responseDisplay = await fetch('/ui/getApiRenderResponseDisplay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(players)
      });
      const responseText = await responseDisplay.text();
      const responseArray = JSON.parse(responseText);

      console.log(responseArray)
      setHtml(responseArray.join(''));
    }
    fetchUI();

  }, [players]);

  if (!html) {
    return <></>;
  } //when there's a delay with getting data

  return <ul dangerouslySetInnerHTML={{ __html: html }} />
}

//This part is only for rendering, applying the single responsibility principle.




