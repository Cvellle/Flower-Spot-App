import { ChangeEvent, useState } from "react";

export default function SwitchInputComponent({
  isChecked,
  changeHandler,
}: {
  isChecked?: boolean;
  changeHandler: (e: ChangeEvent) => void;
}) {
  const [activeState, setActiveState] = useState(isChecked ? isChecked : false);

  function handleChange(e: ChangeEvent) {
    setActiveState(!activeState);
    changeHandler(e);
  }

  return (
    <div className="relative fowerspopt_swicth_input w-[76px] relative">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e: ChangeEvent) => handleChange(e)}
        />
        <span className="slider round"></span>
      </label>
      <div className="absolute bottom-[-28px] w-[100%] flex justify-around">
        {activeState ? (
          <span className="text-[gray]">on</span>
        ) : (
          <span>on</span>
        )}
        {!activeState ? (
          <span className="text-[gray]">off</span>
        ) : (
          <span>off</span>
        )}
      </div>
    </div>
  );
}
