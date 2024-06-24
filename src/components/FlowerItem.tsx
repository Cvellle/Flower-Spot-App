import { useNavigate } from "react-router-dom";
import { StarSvg } from "../assets/icons/StarSvg";
import { useAuth } from "../router/useAuth";

const FlowerItem = ({ item }: { item: IFlower }) => {
  // hooks
  const navigate = useNavigate();
  const user = useAuth().user;

  return (
    <div
      onClick={() => {
        navigate("/flower/" + item.id);
      }}
      key={item.id}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%), url(${"/src/assets/images/blueFl.png"})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "auto 100%",
      }}
      className="h-[230px] md:h-[290px] lg:h-[350px] flex justify-center content-start flex-wrap
       [&>*]:w-full [&>*]:text-center text-[#FFFFFF] text-[9.6px] md:text-[12px] leading-none cursor-pointer"
    >
      <div className="flex justify-end pt-[15px] pr-[15px]">
        <div className="w-[25px] h-[25px]">
          {user ? (
            <div
              style={{
                boxShadow: "0px 5px 15px 0px #0000001A",
              }}
              className="hover:bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E]
          rounded-[50%] bg-[#FFFFFF] flex items-center justify-center h-[25px] w-[25px]"
            >
              <StarSvg />
            </div>
          ) : null}
        </div>
      </div>
      <h3 className="text-[16px] mt-[106.66px] md:mt-[148.83px] lg:mt-[191px] lg-[191px] text-[15px] md:text-[20px] leading-none">
        {item?.name}
      </h3>
      <div className="min-h-[36px]">
        <h4 className="leading-none opacity-[0.7] my-[3px] px-[15px] truncate">
          {item?.latinName}
        </h4>
      </div>
      <div className="flex justify-center">
        <button
          style={{
            boxShadow: "0px 15px 20px 0px #EAA89F33",
          }}
          className="md:w-[85px] md:h-[25px] lg:w-[103px] lg:h-[30px]
         transition duration-500 md:bg-[#00000080] leading-none rounded-[20px]
         hover:bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E]"
        >
          {item?.sightingsNum + " sightings"}
        </button>
      </div>
    </div>
  );
};

export default FlowerItem;
