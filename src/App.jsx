import "./App.css";
import { Route, Routes } from "react-router-dom";

import Firstpage from "./Components/Firstpage";
import Homepage from "./Components/Homepage";
import Detailpage from "./Components/Detailpage";
import Customdiv from "./Components/Customdiv";
import Login from "./Components/Login";
import Aboutus from "./Components/Aboutus";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Customdiv" element={<Customdiv />} />
          <Route path="/Detailpage/:id" element={<Detailpage />} />
          <Route path="/Aboutus" element={<Aboutus/>}/>

        </Routes>
     
    </div>
  );
}

export default App;
