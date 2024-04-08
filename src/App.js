import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./component/pages/ProductList";
import ProductDetails from "./component/pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
