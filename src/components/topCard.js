function TopCard({ data }) {
    return (
      <div className="card">
        <div className="music">
          <img src="./music.png"  alt = "Изображение альбома"  />
          <div className="artist_name">{data.name}</div>
          <div className="data_container">
            <div className="data">
              <p className="playlist-name">Исполнитель альбома:</p>
              <p className="playlist-name number">
                      <a href = {data.url} className="value">
                          {data.artist.name}
                      </a>
                  </p>
            </div>
            <hr />
            <div className="data">
              <p className="playlist-name">Место: </p>
              <p className="playlist-name number">{data["@attr"].rank}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default TopCard; 