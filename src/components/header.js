import React from "react";
import { HeaderContext } from "../context";
import { useContext } from "react";
import { getApiData } from "./getApi";

function Header() {
  const { setSearchData } = useContext(HeaderContext);
  const ERR = 'Данные по запросу не найдены';


  function getResult(value) {
    if (value !== "") {
      getApiData(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${value}&api_key=ffabe702da033934777f5163ba7e8db3&format=json`
      ).then((data) => {
          return setSearchData(data.results.trackmatches.track);
      });
    } else setSearchData([]);
  }
  return (
    <header className="header">
        <ul className="header_ul">
          <li className="header_li">&#9776;</li>
          <li className="header_li">&#8249;</li>
          <li className="header_li">&#9658;</li>
          <li className="header_li">&#8250;</li>
          <li className="header_li">&#9835;</li>
        </ul>
        
    
      <input
        type="search"
        className="header__search"
        placeholder="Поиск"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getResult(e.target.value);
          }
        }}
        />
    </header>
    );
}

export default Header; 