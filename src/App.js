import Portpolio from "./components/Portfolio";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Mainpage from "./Mainpage";
import Wethetapplication from "./components/Wethetapplication";
import Frontpage from "./components/Frontpage";
import Todolist from "./components/Todolist";
import Ecommerce from "./components/Ecommerce";
import Singleproducts from "./components/Singleproducts";
import Allproducts from "./components/Allproducts";
import Mobiles from "./components/Mobiles";
import Laptops from "./components/Laptops";
import Lapmobile from "./components/lapmobile";
import Loginpage from "./components/Loginpage";
import Register from "./components/Register";
import Progreaabar from "./components/Progreaabar";

function App() {
  return (
    <>
      {/* <Todolist /> */}
      {/* <Stars /> */}
      {/* <OffCanvass /> */}
      {/* <Register /> */}
      {/* <Loginpage /> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Frontpage />} />
        <Route path="/todo-list" element={<Todolist />} />
        <Route path="/portfolio_page" element={<Portpolio />} />
        <Route path="/ecommerce_page" element={<Ecommerce />} />
        <Route path="/aboutme-page" element={<Aboutme />} />
        <Route path="/wether" element={<Wethetapplication />} />

        {/* <Route path="/register_page" element={<Register />} /> */}
        <Route path="/login_page" element={<Loginpage />} />

        <Route path="/mobileonly" element={<Mobiles />} />
        <Route path="/laptoponly" element={<Laptops />} />
        <Route path="/allpages" element={<Lapmobile />} />

        {/* ecommercer */}
        <Route path="/productss/:id" element={<Singleproducts />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Routes>
    </>
  );
}

export default App;
