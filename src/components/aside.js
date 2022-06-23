import React from "react";

function Aside(){
    return (
        <aside className="aside">
      <div className="logo">
        <img src="./spotify.png" alt="spotify_logo" width="64" height="64"/>
        <h1 className="aside_h1" >Spotify</h1>
      </div>
      <div className="aside_menu">
      <ul className="ul">
        <li ><a href="/" className="li">Главная</a></li>
        <li className="li">Моя медиатека</li>
        <li className="li">Создать плейлист</li>
        <li className="li">Любимые треки</li>
      </ul>
    </div>
      <div className="aside_button">
    <a href="/"><button className="button">Зарегистрироваться</button></a>
    <a href="/"><button className="button">Вход</button></a>
  </div>  
    </aside>
    );
}

export default Aside;