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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import MyPost from './Pages/Dashboard/MyPost/MyPost';
import Review from './Pages/Dashboard/Review/Review';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/needDoners" element={<PrivateRoute><NeedDoners /></PrivateRoute>} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/addBloodRequest" element={<AddBloodRequest />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>

              <Route path="myPost" element={<MyPost />}>

              </Route>
              <Route path="review" element={<Review />}>

              </Route>
              <Route path="makeAdmin" element={<MakeAdmin />}>

              </Route>
            </Route>


            <Route path="*" element={<NoResult />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
