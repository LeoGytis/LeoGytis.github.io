import React, { useState } from "react";

const ThemeSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isOn ? "" : "matrix");
  };

  return (
    <>
      <input
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label className="switch-label bg-primary" htmlFor={`switch`}>
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default ThemeSwitch;
