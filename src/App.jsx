import React from "react";
import "./App.scss";
// react-router-dom is a package that allows you to create
//navigation in your app.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
