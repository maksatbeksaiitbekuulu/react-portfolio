import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Works from "./Pages/Works/Works";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Notfound from "./Pages/Notfound/Notfound";

import "./app.scss";
// import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
