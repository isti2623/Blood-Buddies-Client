import './App.css';

import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Campaign from './Pages/Campaign/Campaign/Campaign';
import NeedDoners from './Pages/NeedDoners/NeedDoners/NeedDoners';
import AddBloodRequest from './Pages/AddBloodRequest/AddBloodRequest/AddBloodRequest';
import Blog from './Pages/Blog/Blog/Blog';
import Contact from './Pages/Contact/Contact/Contact';
import NoResult from './Pages/NoResult/NoResult/NoResult';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/needDoners" element={<NeedDoners />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/addBloodRequest" element={<AddBloodRequest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoResult />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
