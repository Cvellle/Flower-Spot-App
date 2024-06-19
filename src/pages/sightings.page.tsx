import { useQuery } from "@tanstack/react-query";
import { CommentSVG } from "../assets/icons/Comment";
import { HeartSVG } from "../assets/icons/HeartSvg";
import { LocationSvg } from "../assets/icons/LocationSvg";
import useStore from "../store";
import { useEffect } from "react";
import { getSightingsFunction } from "../api/appApi";

const Sightings = () => {
  const store = useStore();
  const { data, isLoading } = useQuery(
    ["sightings"],
    async (s: any = {}) => await getSightingsFunction(s),
    {
      select(data) {
        return data;
      },
      onSuccess(data) {
        // store.setAuthUser(data);
        // store.setRequestLoading(false);
      },
      onError(error) {
        store.setRequestLoading(false);
        if (Array.isArray((error as any).response.data.error)) {
          // (error as any).response.data.error.forEach((el: any) =>
          //   // toast.error(el.message, {
          //   //   position: "top-right",
          //   // })
          // );
        } else {
          // toast.error((error as any).response.data.message, {
          //   position: "top-right",
          // });
        }
      },
    }
  );

  useEffect(() => {
    getSightingsFunction();
  }, []);

  let sightings = Array.isArray(data?.items) ? data.items : [];

  const items = [
    // {
    //   image: "../src/assets/images/blueFl.png",
    //   desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    // },
    // {
    //   image: "../src/assets/images/blueFl.png",
    //   desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    // },
    // {
    //   image: "../src/assets/images/blueFl.png",
    //   desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    // },
  ];
  return (
    <>
      <section className="min-h-screen pt-[35px] flex flex-wrap justify-center pb-[16px]">
        <div className="text-[#949EA0] [&>*]:text-center">
          <h2 className="text-[24] leading-[40px]">Add New Sighting</h2>
          <h3 className="my-[13px] text-[12px] leading-[17px]">
            Explore between more than 8.427 sightings
          </h3>
        </div>
        {sightings?.map((item, i) => (
          <div
            key={i}
            className="w-[100%] md:w-[232px]  
              px-[16px] py-[8px] md:m-[10px] bg-[rgba(0, 0, 0, 0.05)]"
          >
            <div
              style={{ boxShadow: "0px 15px 30px 0px #0000000D" }}
              className="h-[439px] md:h-[498px] flex flex-col"
            >
              <div className="mt-[20px] mb-[-42.4px] relative z-[10]">
                <div className="flex items-center pl-[20px] rounded-[1rem] ml-[20px] w-[136px] h-[22.04px] bg-[white]">
                  <LocationSvg height="14" width="10" />
                  <span className="ml-[10px] text-[#FBDDCE] text-[12px]">
                    San Fra
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${"url(../src/assets/images/purpleFl.png)"})`,
                  }}
                  className="w-full h-[246.83px]"
                ></div>
                <div className="flex items-center mt-[23.17px]">
                  <div
                    style={{
                      backgroundImage: `url(../src/assets/images/purpleFl.png)`,
                    }}
                    className="ml-[20px] w-[40px] h-[40px] rounded-full"
                  ></div>
                  <div className="flex flex-col justify-between h-[30px] ml-[43.45px]">
                    <p className="text-[15px] leading-[15px] text-[#334144] font-[300]">
                      Miical bebe
                    </p>
                    <p className="italic text-[12px] leading-[12px] text-[#949EA0]">
                      Adam asd
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-[15px] px-[27.64px]">
                  <p
                    className="italic text-[12px] leading-[14.63px] text-[#949EA0]
             w-full h-[54.65px] font-montserrat tracking-[1.6px] text-justify
             overflow-hidden overflow-ellipsis"
                  >
                    {item?.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="h-[0.8px] w-[331.71px] bg-[#E8E9ED] mt-[15px]"></div>
                </div>
              </div>
              <div className="flex justify-between text-[12px] leading-none text-[#949EA0] h-[100%]">
                <div className="flex-[50%] flex items-end mb-[-8px] ">
                  <div className="ml-[20px] mr-[30px]">
                    <CommentSVG />
                  </div>{" "}
                  <span>{item?.commentCount + " Comments"}</span>
                </div>
                <div className="flex-[50%] flex items-end mb-[-8px]">
                  <div className="ml-[20px] mr-[30px]">
                    <HeartSVG />
                  </div>{" "}
                  <span>{item?.likeCount + " Favorites"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Sightings;
