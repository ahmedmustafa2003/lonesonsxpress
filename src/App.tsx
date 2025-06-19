import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import About from "./pages/about";
// import QuotePage from "./pages/quotepage";
// import BlogPage from "./pages/blogpage";
import Track from "./pages/track";
import SuccessPage from "./components/successpage";
// import Successnewsletter from "./components/successnewsletter";
import Successquote from "./components/successquote";
import QuoteSection from "./pages/QuoteSection";
import Successmesg from "./components/successmesg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/quotepage" element={<QuotePage />} /> */}
        {/* <Route path="/BlogPage" element={<BlogPage />} /> */}
        <Route path="/track" element={<Track />} />
        <Route path="/successpage" element={<SuccessPage />} />
        {/* <Route path="/successnewsletter" element={<Successnewsletter />} /> */}
        <Route path="/successquote" element={<Successquote />} />
        <Route path="/quote" element={<QuoteSection />} />
        <Route path="/successmesg" element={<Successmesg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
