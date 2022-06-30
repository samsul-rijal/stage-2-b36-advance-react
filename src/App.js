import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// import necessary object from react-router-dom

// import "pages" component here
// import About from './pages/About'
// import Home from './pages/Home'
// import Profile from './pages/Profile'
// import SignIn from './pages/SignIn'

import {Home, Profile, About, SignIn} from "./pages";

function App() {
  return (
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/profile" element={<Profile />}  />
          <Route path="/signin" element={<SignIn />}  />
        </Routes>
      </>  
  );
}

export default App;