import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
const App = () => {
  const user = false;
  return <div>
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/products/:category" element={<ProductList />}>
        </Route>
        <Route path="/product/:id" element={<Product />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
        <Route path="/login" element={user ? <Navigate to ="/" />:<Login />}>
        </Route>
        <Route path="/register" element={user ? <Navigate to = "/"/>:<Register/>}>
        </Route>
        <Route path="/cart/checkout" element={<Checkout />}>
        </Route>
    </Routes>
  </BrowserRouter>,
  </div>;
};

export default App;