import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Products />
              <About />
              <Contact />
            </>
          }
        />

        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;