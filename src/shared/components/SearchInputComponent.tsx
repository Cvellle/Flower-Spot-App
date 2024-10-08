import { SyntheticEvent, useMemo, useState } from "react";
import { debounce } from "lodash";
import { SearchSvg } from "../../assets/icons/SearchSvg";

type HTMLElementEvent<T extends HTMLElement> = SyntheticEvent & {
  target: T;
};

export default function SearchInputComponent({
  placeholder = "",
  changeHandler,
}: {
  placeholder?: string;
  changeHandler: (value: string, event: SyntheticEvent) => void;
}) {
  const [value, setValue] = useState<string>("");

  const debounceFn = useMemo(() => debounce(handleDebounceFn, 300), []);

  function handleDebounceFn(inputValue: any, event: SyntheticEvent) {
    changeHandler(inputValue, event);
  }

  function handleChange(event: HTMLElementEvent<HTMLInputElement>) {
    setValue(event?.target?.value);
    debounceFn(event.target.value, event);
  }

  return (
    <div
      className="flex"
      style={{
        boxShadow: "0px 15px 30px 0px #0000000D",
      }}
    >
      <input
        className="p-[19px] md:p-[25px] h-full text-[#949EA0] bg-[#FFFFFF] text-[14px] md:text-[18px]"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div className="w-[62.36px] ml-[-62.36px] flex items-center justify-center">
        <SearchSvg />
      </div>
    </div>
  );
}
