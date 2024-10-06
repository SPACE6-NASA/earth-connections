import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Earth Connections</h1>
      <p>Explore how wildfires, deforestation, and polar ice melting are interconnected and affect our planet.</p>
      <iframe width="1080" height="400" src="https://earthengine.google.com/iframes/timelapse_player_embed.html#v=61.72941,5.52469,9.941,latLng&t=1.51&ps=50&bt=19840101&et=20221231" frameborder="0" allowfullscreen></iframe>
      <div className="sections">
        <Link to="/wildfires">
          <button>Explore Wildfires</button>
        </Link>
        <Link to="/deforestation">
          <button>Explore Deforestation</button>
        </Link>
        <Link to="/polar-ice">
          <button>Explore Polar Ice</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
