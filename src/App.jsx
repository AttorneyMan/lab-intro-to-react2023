// import React from "react";
import "./index.css";

import Navbar from "./Components/NavBar";
import Header from "./Components/Header";
import UserProfile from "./Components/UserProfile";

 
function App() {
    const [count, setCount] = useState(0)
  //  console.log(`${import.meta.VITE_ANTMANS_VAR}`)
  
    return (
      <>
      <Header>
       <div>Ant man is learning code</div>
       <div>Antmans secret code is {import.meta.env.VITE_ANTMANS_VAR}</div>
  </Header>
  </>
 )
}

export default App;
