import { useMutation } from "@tanstack/react-query";
import useStore from "../store";
import { CogsSvg } from "../assets/icons/CogsSvg";
import { CloseSvg } from "../assets/icons/CloseSvg";
import { isDesktop } from "../shared/constants/screenMatch";
import SwitchInputComponent from "../shared/components/SwitchInputComponent";
import RangeInputComponent from "../shared/components/RangeInputComponent";

const Settings = () => {
  const store = useStore();

  return (
    <section
      className="w-full lg:maxW-[600px] lg:maxH-[630px] bg-[#FFFFFF]
       text-[#334144] flex justify-center h-[calc(100vh_-_80px)] lg:maxH-[630px]"
    >
      <div className="max-w-[397px] pt-[27px] flex flex-wrap [&>*]:w-full">
        <div className="px-[8.33vw] mx-auto relative">
          {isDesktop ? (
            <div>
              <CloseSvg />
            </div>
          ) : null}
          <div className="h-[40px] flex justify-center items-center">
            <h2 className="text-[20px] text-[#334144]">Settings</h2>
            <div className="absolute right-[4vw] lg:relative flex content-center">
              <CogsSvg />
            </div>
          </div>
          <div className="mt-[73px] text-[14px] leading-[30px] flex">
            <div className="flex-[33%] ">Turn notifications</div>
            <div className="flex-[33%] flex justify-center">
              <SwitchInputComponent
                isChecked={false}
                changeHandler={() => {
                  return;
                }}
              />
            </div>
            <div className="flex-[33%] flex justify-center"></div>
          </div>
          <div className="mt-[70px] h-[1px] w-full bg-[#E8E9ED]"></div>
          <div className="mt-[70px] text-[14px] leading-[30px] max-w-[60%]">
            Select favorite flower sighting radius for notifications
          </div>
        </div>
        <div className="mt-[37px] h-[102px] flex justify-center">
          <RangeInputComponent />
        </div>
        {isDesktop ? (
          <button
            onClick={() => {
              return;
            }}
            className="mt-[117px] block w-[150px] rounded-[3.2px]
           mx-auto h-[50px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] font-[500]"
            type={"submit"}
          >
            Save Settings
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Settings;
