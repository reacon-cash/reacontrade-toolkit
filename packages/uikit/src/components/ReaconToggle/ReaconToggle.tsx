import React from "react";
import { ReaconStack, ReaconInput, ReaconLabel } from "./StyledReaconToggle";
import { ReaconToggleProps, scales } from "./types";

const ReaconToggle: React.FC<ReaconToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <ReaconStack scale={scale}>
    <ReaconInput id={props.id || "Reacon-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <ReaconLabel scale={scale} checked={checked} htmlFor={props.id || "Reacon-toggle"}>
      <div className="Reacons">
        <div className="Reacon" />
        <div className="Reacon" />
        <div className="Reacon" />
        <div className="butter" />
      </div>
    </ReaconLabel>
  </ReaconStack>
);

export default ReaconToggle;
