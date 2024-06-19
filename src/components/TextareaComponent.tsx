import React from "react";
import { useFormContext } from "react-hook-form";

type TextareaComponentProps = {
  label?: string;
  name: string;
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
    <div className="">
      <label
        htmlFor={name}
        className="relative z-10 block mb-[-10px] text-[#949EA0] text-[11px] leading-[13px] font-ubuntu
         h-[10px] pt-[10px] pl-[19px]"
      >
        {label?.length ? label : "Wrte a comment"}
      </label>
      <textarea
        className={`italic text-[13px] pt-[24px] pl-[19px] block w-full h-[242px] rounded-[3.2px] bg-[#DFE5EA]
         text-[15px] leading-[20px] text-[#334144]`}
        {...register(name)}
      />
      {errors[name] && (
        <span className="z-20 text-red-500 text-[12px] leading-none pt-0 block h-[12px] mt-[-10px]">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default TextareaComponent;
