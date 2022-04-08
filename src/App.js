import { Router, Route, Routes } from "react-router";
import Foot from "./components/Foot";
import Locations from "./screens/Locations";
import About_us from "./screens/About_us";
import Products from "./screens/Products";
import Welcome from "./screens/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path="Locations" element={ <Locations/> } />
        <Route path="About_us" element={ <About_us/> } />
        <Route path="Products" element={ <Products/> } />
      </Routes>
      <Foot/>
    </div>
  );
}

export default App;
