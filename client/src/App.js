import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import StoryControl from "./components/StoryControl";

const App = () => (
    <div>
      <Nav />
        <StoryControl />
      <div className="footer">
        <Footer />
      </div>
    </div>
);

export default App;
