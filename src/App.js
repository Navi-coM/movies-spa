import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFoundPage } from './pages/NotFoundPage';




function App() {
  return (
    <>
      <Header />
      <main className="main content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </>

  );
}

export default App;
