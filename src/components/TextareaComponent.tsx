import React from "react";
import { useFormContext } from "react-hook-form";
import { isDesktop } from "../shared/constants/screenMatch";

type TextareaComponentProps = {
  label?: string;
  name: string;
  height?: string;
};

const TextareaComponent: React.FC<TextareaComponentProps> = ({
  label = "",
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label
        htmlFor={name}
        className="relative z-10 block mb-[-10px] text-[#949EA0] text-[11px] leading-[13px] font-ubuntu
         h-[10px] pt-[10px] pl-[19px]"
      >
        {label?.length ? label : "Write a comment"}
      </label>
      <textarea
        style={{ height: isDesktop ? "150px" : "242px" }}
        className={`italic pt-[24px] pl-[19px] w-full rounded-[3.2px] bg-[#DFE5EA] text-[15px] leading-[20px] text-[#334144]`}
        {...register(name)}
      />
      {errors[name] && (
        <span className="z-20 text-red-500 text-[12px] leading-none pt-0 block h-[12px]">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default TextareaComponent;
