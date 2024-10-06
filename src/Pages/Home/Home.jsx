import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Earth Connections</h1>
      <p>Explore how wildfires, deforestation, and polar ice melting are interconnected and affect our planet.</p>
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
