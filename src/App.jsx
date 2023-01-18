import { Route, Routes } from "react-router-dom";
import { Checkout } from "./ROUTES/CHECKOUT/Checkout.component";
import { Navigation } from "./ROUTES/NAVIGATION/Navigation.component";
import { Authentication } from "./ROUTES/AUTHENTICATION/Authentication.component";
import { Shop } from "./ROUTES/SHOP/Shop.component";
import { Home } from "./ROUTES/HOMEPAGE/Home.component";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
