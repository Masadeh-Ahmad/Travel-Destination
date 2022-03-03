
import { Routes, Route, Link } from "react-router-dom";
import data from "./data/db.json";
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails' 
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={ data } />} />
    </Routes>
  
    
  );
}

export default App;