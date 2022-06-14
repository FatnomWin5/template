import { useState, useContext, useEffect } from "react";
import TopCard from "./topCard";
import Card from "./card";
import { MainContext } from "../context";
function Main() {
  const [topArtists, setTopArtists] = useState([]);
  const { searchData } = useContext(MainContext);
  const getTopUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=edm&api_key=ffabe702da033934777f5163ba7e8db3&format=json";
  const ERR = 'Данные по запросу не найдены';

  useEffect(() => {
    function getTop() {
      getApiData(getTopUrl).then((data) => {
        if (typeof data === 'undefined') {
          console.log(ERR);
        }
        else {
          setTopArtists(data.albums.album);
        }
      });
    };
    getTop();
  }, []);


  function getApiData(url) {
    return fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }

  if (searchData.length === 0) {
    return (
      <main className="main">
        <div className="main-body">
          {topArtists.map((item) => {
            return <TopCard key={item.name} data={item}></TopCard>;
          })}
        </div>
      </main>
    );
  } else {
    return (
      <main className="main">      
        <div className="main-body">
          {searchData.map((item) => {
            return <Card key={item.url} data={item}></Card>;
          })}
        </div>
      </main>
    );
  }
}

export default Main;