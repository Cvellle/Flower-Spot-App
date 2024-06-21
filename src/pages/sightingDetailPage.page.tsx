import { CommentSVG } from "../assets/icons/Comment";
import { HeartSVG } from "../assets/icons/HeartSvg";
import { LocationSvg } from "../assets/icons/LocationSvg";
import TextareaComponent from "../components/TextareaComponent";
import { isTablet } from "../shared/constants/screenMatch";

const SightingDetailPage = () => {
  const items = [
    {
      image: "../src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    },
    {
      image: "../src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    },
    {
      image: "../src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
    },
  ];
  return (
    <div className="bg-[#F9F9F9] relative">
      <section className="pt-[80px]">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(249, 249, 249, 0.0001) 0%, #F9F9F9 100%), url(../../src/assets/images/map_sm.png)`,
            backgroundSize: isTablet ? "100% auto" : "190% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 0% left 50%",
          }}
          className="h-[95.23vw] lg:h-[32.78vw] flex items-start justify-between lg:justify-end text-[#334144] px-[40px] lg:pt-[244px] lg:pl-[30px]"
        >
          <div className="absolute left-[28.57%] top-[51.42vw]">
            <LocationSvg height="40" width="30" />
          </div>
          <div className="lg:flex lg:items-center">
            <div className="w-[80px] md:w-[100px] rounded-full mt-[22px] lg:mr-[30px]">
              <button
                style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
                className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[200px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
              >
                Publish Comment
              </button>
            </div>
            <div className="mt-[64px] ml-[80px]"></div>
          </div>
          <div className="flex pt-[22px]">
            <button
              onClick={() => {
                return;
              }}
              className="text-[#DF9186] w-[110px] rounded-[3.2px] mx-auto h-[50px] bg-[#FFFFFF]
               font-[500] text-[14px] shadow-[0px 15px 20px 0px rgba(234, 168, 159, 0.2)]"
            >
              Report
            </button>
          </div>
        </div>
      </section>
      <section
        className="lg:max-w-[1180px] mx-[auto] md:bg-[#FFFFFF] mt-[-160px] md:mt-[-80px] px-[16px] md:p-[50px] flex flex-wrap"
        style={{
          boxShadow: isTablet ? "0px 15px 30px 0px #0000000D" : "unset",
        }}
      >
        <div
          style={{
            backgroundImage: `url(../src/assets/images/blueFl.png)`,
            backgroundSize: "170% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 0% left 0%",
          }}
          className="h-[290px] w-full md:w-[290px] text-[#FFFFFF]"
        ></div>
        <div className="md:w-[710px] md:ml-[40px] md:max-h-[290px]">
          <div className="w-full md:flex-wrap">
            <div className="flex items-center mt-[30px] md:w-full">
              <div
                style={{
                  backgroundImage: `url(../src/assets/images/user1.png)`,
                  backgroundSize: "100% 100%",
                }}
                className="w-[50px] h-[50px] rounded-full"
              ></div>
              <div className="flex flex-col justify-center h-[50px] ml-[26.45px]">
                <p className="text-[25px] leading-[25px] text-[#334144] font-[300]">
                  Michael bebe
                </p>
                <p className="italic text-[14px] leading-[14px] text-[#949EA0]">
                  By Adam Moore
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[170px] md:h-[unset] mt-[30px] text-[#949EA0] text-[13px] leading-[20px] text-justify">
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
            <div className="h-[0.8px] bg-[#E8E9ED] mt-[30px] mb-[20px]"></div>
            <div className="flex text-[12px] leading-none text-[#949EA0] h-[100%]">
              <div className="flex items-end mt-[15px] ">
                <div className="ml-[20px] mr-[30px]">
                  <CommentSVG />
                </div>{" "}
                <span>18 Comments</span>
              </div>
              <div className="flex items-end mt-[15px]">
                <div className="ml-[22.69px] mr-[30px]">
                  <HeartSVG />
                </div>{" "}
                <span>18 Favorites</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:max-w-[780px] mx-[auto]">
        <div className="flex px-[16px] md:px-[unset] justify-between">
          <h3 className="mt-[125px] text-[25px] leading-none">14 Comments</h3>
          <button
            onClick={() => {
              return;
            }}
            style={{
              boxShadow: "0px 15px 30px 0px #0000000D",
            }}
            className="mt-[37px] text-[#DF9186] w-[110px] rounded-[3.2px] h-[50px] bg-[#FFFFFF]
               font-[500] text-[14px] shadow-[0px 15px 20px 0px rgba(234, 168, 159, 0.2)]"
          >
            Add Comment
          </button>
        </div>
      </section>
      <section className="min-h-screen pt-[35px] flex flex-wrap justify-center pb-[16px] md:max-w-[780px] mx-[auto]">
        {items?.map((item, i) => (
          <div
            key={i}
            className="w-[100%]
              px-[16px] py-[8px] lg:m-[10px] bg-[rgba(0, 0, 0, 0.05)]"
          >
            <div className="flex flex-col">
              <div>
                <div className="flex items-center mt-[23.17px]">
                  <div
                    style={{
                      backgroundImage: `url(../src/assets/images/user1.png)`,
                      backgroundSize: "100% 100%",
                    }}
                    className="w-[40px] h-[40px] rounded-full"
                  ></div>
                  <div className="flex flex-col justify-between h-[30px] ml-[20px]">
                    <p className="text-[15px] leading-[15px] text-[#334144] font-[300]">
                      Michael bebe
                    </p>
                    <p className="italic text-[12px] leading-[12px] text-[#949EA0]">
                      ByAdam Moore
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-[15px]">
                  <p
                    className="text-[13px] leading-[20px] text-[#949EA0]
             w-full font-montserrat tracking-[1.6px] text-justify
             overflow-hidden overflow-ellipsis"
                  >
                    {item?.desc}
                  </p>
                </div>
              </div>
              <div className="h-[0.8px] bg-[#E8E9ED] mt-[30px] mb-[20px]"></div>
            </div>
          </div>
        ))}
        <form className="w-full px-[16px]">
          {/* <TextareaComponent name={"comment"} /> */}
          <button
            type="submit"
            style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
            className="mt-[21px] ml-[204px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[160px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
          >
            Publish Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default SightingDetailPage;
