import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label?: string;
  name: string;
  type?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label = "",
  name,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      {label?.length ? (
        <label
          htmlFor={name}
          className="relative z-10 block mb-[-10px] text-[#949EA0] text-[10px] leading-none font-ubuntu
           h-[10px] pt-[10px] pl-[15px]"
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        className={`${
          type === "date" || type === "file" ? "form-control" : ""
        } text-[13px] pt-[12px] pl-[15px] block w-full h-[50px] rounded-[3.2px] bg-[#DFE5EA]
         text-[13px] color-[#334144]`}
        {...register(name)}
      />
      <div>
        {errors[name] && (
          <span className="z-20 text-red-500 text-[12px] leading-none pt-0 block h-[12px]">
            {errors[name]?.message as string}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInput;
