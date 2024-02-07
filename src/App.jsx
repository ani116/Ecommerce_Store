import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Electronics from "./pages/Electronics";
import Jewellery from "./pages/Jewellery";
import Cart from "./pages/Cart";
import ProductPages from "./pages/ProductPages";


function App() {
  return (
    <div className="">
      
      <div className="">

        <div className="">
          <Navbar></Navbar>
        </div>

        <Routes>
          
          <Route path="/" element={<Home></Home>} />
          <Route path="/Mens" element={<Mens></Mens>} />
          <Route path="/Womens" element={<Womens></Womens>} />
          <Route path="/Electronics" element={<Electronics></Electronics>} />
          <Route path="/Jewellery" element={<Jewellery></Jewellery>} />
          <Route path="/Cart" element={<Cart></Cart>} />
          <Route path="/products/:productId" element={<ProductPages/>}/>
          

        </Routes>

      </div>      

    </div>
  );
}

export default App;
