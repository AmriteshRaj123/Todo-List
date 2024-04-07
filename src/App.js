import "./App.css";
import Userinput, { wishlist } from "./componenet/Userinput";
import React,{ useState } from "react"
import Data from "./componenet/Data";
function App() {
  const [wishlist,setWishlist]=useState([]);
  function addTowishlist(newWish){
    setWishlist([...wishlist,newWish]);
  };
  return (
    <div className="wishlist">
        <Userinput addTowishlist={addTowishlist}/>
        <Data wishlist={wishlist}></Data>
    </div>
  );
}

export default App;
