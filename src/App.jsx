import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Checkout,
  HomePg,
  NavBar,
  ProductPage,
  SearchResults,
} from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePg />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
