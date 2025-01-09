import logo from '../logo.svg';
import '../pages-css/App.css';
import '../components/Header';
import './Welcome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path={"/"} element={<LandingPage/>}/>
                  <Route path={"/welcome"} element={<Welcome/>}/>
                  <Route path={"/dashboard"} element={<Dashboard/>}/>


              </Routes>
          </div>
      </Router>
  );
}

export default App;
