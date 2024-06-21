import { ChangeEvent } from "react";

export default function SwitchInputComponent({
  isChecked,
  changeHandler,
}: {
  isChecked?: boolean;
  changeHandler: (e: ChangeEvent) => void;
}) {
  return (
    <div className="fowerspopt_swicth_input w-[76px]">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e: ChangeEvent) => changeHandler(e)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
