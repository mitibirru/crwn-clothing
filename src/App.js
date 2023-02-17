import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Ckeckout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Ckeckout />} />
      </Route>
    </Routes>
  );
}

export default App;
