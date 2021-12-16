import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Blogs from "./components/Blog";
import BlogPostCopy from "./components/BlogPostCopy";
import Homepage from "./components/Homepage";
import "./App.css";
import SeoPost from "./components/SeoPost";
import SeoDB from "./components/Seo";
import Hello from "./components/Hello";
import TryHello from "./components/TryHello";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SeoDB} />

        <Route path="/seo/:seoTitle" component={SeoPost} />
      </Switch>
    </Router>
  );
}

export default App;
