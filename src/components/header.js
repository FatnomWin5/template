import React, { useState } from "react";
import { HeaderContext } from "../context";
import { useContext } from "react";
import { getApiData } from "./getApi";

function Header() {
  const { setSearchData } = useContext(HeaderContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function getResult(value) {
      let isCanselled = false;
      setLoading(true);
      getApiData(`https://ws.audioscrobbler.com/2.0/?method=track.search&limit=100&track=${value}&api_key=ffabe702da033934777f5163ba7e8db3&format=json`)
          .then((data) => {
            if (isCanselled){
              return;
            }
            return setSearchData(data.results.trackmatches.track);
          })
          .catch((err) => {
            if (isCanselled){
              return;
            }
              setError(err);
          })
          .finally(() => {
            if (isCanselled){
              return;
            }
              setLoading(false);
          });
          return () =>{
            isCanselled = true; 
          };
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
        onChange={(e) => 
            getResult(e.target.value) 
        }
        />
    </header>
    );
}

export default Header; 