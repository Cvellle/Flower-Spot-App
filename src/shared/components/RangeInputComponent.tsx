import { useState } from "react";

export default function RangeInputComponent() {
  const [rangeValue, setRangeValue] = useState<number>(50);

  return (
    <div
      className="range_input_comp"
      style={{
        maxHeight: "102px",
        maxWidth: "385px",
        paddingTop: "51px",
      }}
    >
      <div
        className="range2_wrapper"
        style={{
          height: "102px",
        }}
      >
        <div className="range range2">
          <input
            min={1}
            type="range"
            id="range"
            value={rangeValue}
            onChange={(e) => {
              return;
            }}
          />
        </div>
      </div>

      <div
        style={{
          maxHeight: "102px",
          marginTop: "-102px",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
          position: "relative",
          zIndex: 5,
          padding: "11px 45px 0 45px",
          display: "flex",
          fontSize: "14px",
          alignItems: "flexStart",
          justifyContent: "space-between",
        }}
        className="w-[285px] s:w-[397px]"
      >
        <div className="w-[40px] flex justify-center ml-[-17px]">1 km</div>
        <div>5 km</div>
        <div className="w-[40px] flex justify-center mr-[-17px]">10 km</div>
      </div>
    </div>
  );
}
