import { useState } from "react";

export default function RangeInputComponent() {
  const [rangeValue, setRangeValue] = useState<number>(50);

  return (
    <div className="range_input_comp max-h-[102px] max-w-[385px] pt-[51px]">
      <div className="range2_wrapper h-[102px]">
        <div className="range range2">
          <input
            min={1}
            type="range"
            id="range"
            value={rangeValue}
            onChange={(e) => {
              // left here because of errors in console
              return;
            }}
          />
        </div>
      </div>

      <div className="flex max-h-[102px] max-w-[385px] mt-[-102px] justify-content-center">
        <div
          className="range range3 w-[195px] s:w-[295px]"
          style={{
            background: `url(/src/assets/icons/track.png) center center no-repeat, url(/src/assets/icons/point.png) left top 7px no-repeat, url(/src/assets/icons/point.png) center top 7px no-repeat, url(/src/assets/icons/point.png) right top 7px no-repeat`,
            paddingTop: "10px",
            marginTop: "-10px",
            paddingBottom: "10px",
            marginBottom: "-10px",
          }}
        >
          <input
            type="range"
            min={1}
            id="range3"
            value={rangeValue}
            className="range3 w-[285px] s:w-[397px]"
            onChange={(e) => {
              setRangeValue(+e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: "11px 45px 0 45px",
        }}
        className="flex w-[285px] s:w-[397px] relative z-[5] text-[14px] justify-between"
      >
        <div className="w-[40px] flex justify-center ml-[-17px]">1 km</div>
        <div>5 km</div>
        <div className="w-[40px] flex justify-center mr-[-17px]">10 km</div>
      </div>
    </div>
  );
}
