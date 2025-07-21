import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProductPage from "@/pages/kantin";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutHal from "@/pages/about";

// 1. Ganti import ke CanteenDetail
import { CanteenDetail } from "./components/product-detail"; 
// 2. Ganti import dari 'products' menjadi 'canteens'
import { canteens } from "./data/product";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductPage />} path="/kantin" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutHal />} path="/about" />
      {/* 3. Perbarui Route untuk menggunakan CanteenDetail dan data canteens */}
      {/* Disarankan juga untuk mengubah path agar lebih sesuai, misal: 'kantin/:id' */}
      <Route path='kantin/:id' element={ <CanteenDetail canteens={canteens} />} />
    </Routes>
  );
}

export default App;
