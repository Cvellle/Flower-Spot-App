import { CogsSvg } from "../assets/icons/CogsSvg";
import { isDesktop } from "../shared/constants/screenMatch";
import SwitchInputComponent from "../shared/components/SwitchInputComponent";
import RangeInputComponent from "../shared/components/RangeInputComponent";

const Settings = () => {
  return (
    <section
      className="w-full md:w-[600px] min-h-[calc(100vh_-_80px)] lg:min-h-[630px] bg-[#FFFFFF] rounded-[3.2px]
       text-[#334144] flex justify-center lg:maxH-[630px] px-[18px] overflow-scroll md:overflow-visible"
    >
      <div className="max-w-[330px] s:max-w-[386px] pt-[40px] flex flex-wrap [&>*]:w-full">
        <div className="mx-auto relative">
          <div className="h-[40px] flex justify-center items-center">
            <h2 className="text-[20px] text-[#334144] leading-[40px]">
              Settings
            </h2>
            <div className="absolute right-[0px] lg:right-[0px] lg:ml-[20px] lg:relative">
              <CogsSvg />
            </div>
          </div>
          <div className="mt-[50px] text-[14px] leading-[30px] flex">
            <div className="flex-[35%] pl-[18px] whitespace-nowrap">
              Turn notifications
            </div>
            <div className="flex-[auto] flex justify-center">
              <SwitchInputComponent
                changeHandler={() => {
                  // left return because of errors
                  return;
                }}
              />
            </div>
            <div className="flex-[33%] flex justify-center"></div>
          </div>
          <div className="mt-[50px] h-[1px] w-full bg-[#E8E9ED]"></div>
          <div className="mt-[50px] pl-[18px] text-[14px] leading-[30px] max-w-[65%]">
            Select favorite flower sighting radius for notifications
          </div>
        </div>
        <div className="mt-[37px] h-[102px] flex justify-center">
          <RangeInputComponent />
        </div>
        {isDesktop ? (
          <div className="pb-[40px]">
            <button
              className="mt-[40px] block w-[150px] rounded-[3.2px] text-[#FFFFFF]
           mx-auto h-[50px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] font-[500]"
              type={"submit"}
            >
              Save Settings
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Settings;
