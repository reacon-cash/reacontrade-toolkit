import React, { useState } from "react";
import ReaconToggle from "./ReaconToggle";

export default {
  title: "Components/ReaconToggle",
  component: ReaconToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <ReaconToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <ReaconToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <ReaconToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
