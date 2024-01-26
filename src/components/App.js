import React from "react";
import Navbar from "./navbar";
import Qpanel from "./Qpanel";
function App() {
  return (
    <div>
      <div class="h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <Navbar />
        <Qpanel />
      </div>
    </div>
  );
}

export default App;
