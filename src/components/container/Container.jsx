import React from "react";
import "./Container.scss";

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}

// export default function Container({ children }) {
//   return;
//   <div className="container">{children}</div>;
// }
