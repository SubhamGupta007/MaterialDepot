import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home"
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/page1" element={<Page1/>}></Route>
      <Route exact path="/page2" element={<Page2/>}></Route>
      <Route exact path="/page3" element={<Page3/>}></Route>
    </Routes>
  );
}

export default App;
