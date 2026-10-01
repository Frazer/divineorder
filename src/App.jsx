import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import HomeOrder from "./pages/HomeOrder.jsx";
import Inquire from "./pages/Inquire.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home-order" element={<HomeOrder />} />
        <Route path="inquire" element={<Inquire />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
