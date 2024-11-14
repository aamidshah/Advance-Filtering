import React from "react";
// import '../Category.css'
const input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label">
      <input onChange={handleChange} type="radio" name={name} value={value} />
      <span className="checkbox" style={{ backgroundColor: color }}>
        {" "}
      </span>
      {title}
    </label>
  );
  return (
    <label className="sidebar-label">
      <input type="radio" name="test" />
      <span className="checkbox"> </span>All
    </label>
  );
};

export default input;
