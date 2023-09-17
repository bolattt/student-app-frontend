import React from "react";
import "./Container.scss";
export default function Container({ children }) {
  console.log("<Container /> rendered.");
  return <div className="Container">{children}</div>;
}
