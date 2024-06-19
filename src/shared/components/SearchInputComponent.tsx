import { SyntheticEvent, useMemo, useState } from "react";
import { debounce } from "lodash";
import { SearchSvg } from "../../assets/icons/SearchSvg";

export default function SearchInputComponent({
  placeholder = "",
}: {
  placeholder?: string;
}) {
  const [value, setValue] = useState<string>("");

  const debounceFn = useMemo(() => debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(inputValue: any) {
    alert(inputValue);
  }

  function handleChange(event: SyntheticEvent) {
    setValue(event.target.value);
    debounceFn(event.target.value);
  }

  return (
    <div className="flex">
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
