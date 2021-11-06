import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Campaign from './Pages/Campaign/Campaign/Campaign';
import NeedDoners from './Pages/NeedDoners/NeedDoners/NeedDoners';
import AddBloodRequest from './Pages/AddBloodRequest/AddBloodRequest/AddBloodRequest';
import Blog from './Pages/Blog/Blog/Blog';
import Contact from './Pages/Contact/Contact/Contact';
import NoResult from './Pages/NoResult/NoResult/NoResult';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/campaign'>
            <Campaign />
          </Route>
          <Route path='/needDoners'>
            <NeedDoners />
          </Route>
          <Route path='/addBloodRequest'>
            <AddBloodRequest />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <NoResult />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
