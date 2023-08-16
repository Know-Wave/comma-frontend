import { Routes, Route } from "react-router-dom";

import ProductPage from '../pages/product/ProductPage';

const ProductRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    </Routes>
  );
};

export default ProductRoute;