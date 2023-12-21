import React from "react";
import { CHIP_LABELS } from "../../constants/apis";
import ChipButton from "./ChipButton";

const ChipBar = () => {
  return (
    <div className="px-10 flex  flex-wrap">
      {CHIP_LABELS.map((chipLabel, index) => (
        <ChipButton key={index} chipLabel={chipLabel} />
      ))}
    </div>
  );
};

export default ChipBar;
