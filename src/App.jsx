import { Route, Routes } from "react-router-dom";
import { Categories } from "./Categories";
import { Checkout } from "./CHECKOUT/Checkout.component";
import { Navigation } from "./COMPONENTS/NAVIGATION/Navigation";
import { Authentication } from "./COMPONENTS/SIGNIN/Authentication";
import { Shop } from "./SHOP/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
