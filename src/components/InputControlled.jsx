import { React, useState } from "react";

const InputControlled = () => {
  const [value, setValue] = useState("Default value");

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputControlled;
