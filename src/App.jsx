import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Wildfires from './Pages/Wildfires/Wildfires';
import Deforestation from './Pages/Deforestation/Deforestation';
import PolarIce from './Pages/PolarIce/Polarice';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wildfires" element={<Wildfires />} />
          <Route path="/deforestation" element={<Deforestation />} />
          <Route path="/polar-ice" element={<PolarIce />} />
          <Route path="/quiz" element={<Quiz />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
