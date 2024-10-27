import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import Background from "./assests/pexels-pixabay-268917.png";

function App() {
  return (
    <div className="w-full md:h-screen h-full">
      <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
        <img className="w-full h-full object-cover" src={Background} alt="" />
      </div>
      <div>
        {/* <Header /> */}
        <Main />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
