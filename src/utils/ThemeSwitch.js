import React, { useState } from "react";
import "../styles/switch.css";

const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isOn ? "" : "matrix");
  };

  return (
    <div className="hidden lg:flex absolute top-[-30px] right-6">
      <input
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label className="switch-label" htmlFor={`switch`}>
        <span className={`switch-button`} />
      </label>
    </div>
  );
};

export default ThemeSwitch;
