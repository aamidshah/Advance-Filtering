import React from "react";
import "./Color.css";
// import "./Category.css"
import Input from "../../components/input";

const Color = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Colors</h2>

      <label className="sidebar-label">
        <input type="radio" onChange={handleChange} value="" name="test1" />
        <span className="checkbox all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        name="test1"
        value="black"
        title="Black"
        color="green"
      />
      <Input
        handleChange={handleChange}
        name="test1"
        value="blue"
        title="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        name="test1"
        value="green"
        title="Green"
        color="green"
      />
      <Input
        handleChange={handleChange}
        name="test1"
        value="red"
        title="Red"
        color="red"
      />
      <label className="sidebar-label">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />
        <span
          className="checkbox white"
          // style={{ background: "white"}}
        ></span>
        White
      </label>
    </div>
  );
};

export default Color;
