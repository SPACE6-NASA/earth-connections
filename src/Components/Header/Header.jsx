import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wildfires">Wildfires</Link></li>
          <li><Link to="/deforestation">Deforestation</Link></li>
          <li><Link to="/polar-ice">Polar Ice</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
