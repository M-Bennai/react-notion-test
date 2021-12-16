import React from "react";
import { Link } from "react-router-dom";

const TryHello = () => {
  return (
    <div>
      <Link to="/hello">Say hello</Link>
    </div>
  );
};

export default TryHello;
