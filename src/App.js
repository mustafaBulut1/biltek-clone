import NavBar from "./comps/Navbar";
import AboutUs from "./pages/AboutUs";
import Collabrators from "./pages/Collabrators";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div className="App">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/collabs" element={<Collabrators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
