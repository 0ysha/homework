import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductDetail from './pages/ProductDetail';
import ProductCard from './pages/ProductCard';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route exact path="/productcard" element={<ProductCard />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;