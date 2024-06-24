import { useNavigate } from "react-router-dom";
import { CommentSVG } from "../assets/icons/Comment";
import { HeartSVG } from "../assets/icons/HeartSvg";
import { LocationSvg } from "../assets/icons/LocationSvg";

const SightingItem = ({ item }: { item: ISighting }) => {
  // hooks
  const navigate = useNavigate();

  return (
    <div className="w-[100%] bg-[rgba(0, 0, 0, 0.05">
      <div
        style={{ boxShadow: "0px 15px 30px 0px #0000000D" }}
        className="h-[439px] md:h-[498px] lg:h-[500px] flex flex-col"
      >
        <div className="mt-[20px] mb-[-42.4px] relative z-[10]">
          <div className="flex items-center pl-[10px] rounded-[1rem] ml-[20px] w-[136px] h-[22.04px] bg-[white] text-[12px]">
            <LocationSvg height="14" width="10" />
            <span className="ml-[10px] text-[#FBDDCE] text-[12px]">
              {"San Francisco, US"}
            </span>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              navigate("/sightings/" + item.id);
            }}
            style={{
              backgroundImage: `url(${"/src/assets/images/blueFl.png"})`,
              backgroundSize: "100% auto",
              backgroundPosition: `10% 10%`,
            }}
            className="w-full h-[246.83px] md:h-[280px] adjustable_img cursor-pointer"
          ></div>
          <div className="flex items-center mt-[23.17px]">
            <div
              onClick={() => {
                navigate("/user/" + item.authorId);
              }}
              style={{
                backgroundImage: `url(/src/assets/images/user1.png)`,
                backgroundSize: `contain`,
              }}
              className="ml-[20px] w-[40px] h-[40px] rounded-full cursor-pointer"
            ></div>
            <div className="flex flex-col justify-between h-[30px] ml-[43.45px]">
              <p className="text-[15px] leading-[15px] text-[#334144] font-[300]">
                Balcony Flower
              </p>
              <p className="italic text-[12px] leading-[12px] text-[#949EA0]">
                by Adam Moore
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[15px] px-[27.64px] md:px-[16.5px] flex-wrap">
            <p
              className="italic text-[12px] leading-[14.63px] text-[#949EA0]
             w-full h-[54.65px] font-montserrat tracking-[1.6px] text-justify
             overflow-hidden overflow-ellipsis"
            >
              {item?.description}
            </p>
            <div className="h-[0.8px] w-full bg-[#E8E9ED] mt-[15px]"></div>
          </div>
        </div>
        <div className="flex justify-between text-[12px] leading-none text-[#949EA0] h-[100%]">
          <div className="flex-[50%] flex items-center">
            <div className="ml-[20px] mr-[30px] md:m-[10px] lg:mx-[15%]">
              <CommentSVG />
            </div>{" "}
            <span>18 Comments</span>
          </div>
          <div className="flex-[50%] flex flex items-center">
            <div className="ml-[20px] mr-[30px] md:mx-[10px] lg:mx-[15%]">
              <HeartSVG />
            </div>{" "}
            <span>18 Favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightingItem;
