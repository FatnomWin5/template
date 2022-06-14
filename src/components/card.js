import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <div className="music">
        <img src="./music.png"  alt = "Изображение альбома"  />
        <div>
          <p className="artist_name">
            {data.name}
          </p>
          <p className="song_artist_name">{data.artist}</p>
        </div>
        <div className="data_container">
          <div className="data">
            <p className="playlist-name">Слушателей: </p>
            <p className="playlist-name number">
                <a className = "value" href={data.url}>
                    {data.listeners}
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;