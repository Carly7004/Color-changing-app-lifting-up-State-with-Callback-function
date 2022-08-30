import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activecolor, setActivecolor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActivecolor(value);
    getColor(value);
  };
  return (
    <div>
      <input
        type="text"
        id="input"
        placeholder="Enter your color"
        aria-label="input"
        onChange={handleChange}
        value={activecolor}
      />
    </div>
  );
};

export default Callback;
