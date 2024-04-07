import Home from "./homepage";
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./nav";
import Fulldisplay from "./fulldisplay";
import Newcv from "./newcv";


function App() {
  return (
    <>
    <Router>
      <div className="App">
    <Navbar/>


    <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Newcv/>}/>
      <Route path="/blogs/:id" element={<Fulldisplay/>}/>
      </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
