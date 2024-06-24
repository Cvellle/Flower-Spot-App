import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getSightingsFunction } from "../api/appApi";
import SightingItem from "../components/SightingItem";
import { useNavigate } from "react-router-dom";
import { mockedSightings } from "../shared/data/mockedData/mockedSighints";
import { isDesktop, isTablet } from "../shared/constants/screenMatch";
import { StarSvg } from "../assets/icons/StarSvg";

const FlowerPage = () => {
  // hooks
  const navigate = useNavigate();

  // left as an example - empty array is comming from backend, and creation is cors protected
  const { data } = useQuery(
    ["sightings"],
    async () => await getSightingsFunction(),
    {
      onError(error) {
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      },
    }
  );

  // mocked data given
  let sightings = mockedSightings;

  return (
    <>
      <section className="pt-[80px] relative">
        <div
          className="lg:absolute lg:top-[80px] lg:left-[0px] lg:h-[350px] lg:z-[-1] lg:w-[100%]"
          style={
            isDesktop
              ? {
                  background:
                    'url("/src/assets/images/orange.png") top 50% left 0 no-repeat, linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.4) 100%)',
                  backgroundSize: "100% auto, auto 100%",
                  zIndex: -1,
                }
              : {}
          }
        ></div>
        <div
          style={
            !isDesktop
              ? {
                  background: `url(/src/assets/images/purple_small.png)`,
                  backgroundSize: isTablet ? "100% auto" : "auto 100%",
                }
              : {}
          }
          className="relative mx-auto lg:max-w-[1180px] text-[#FFFFFF] px-[40px]
           lg:pl-[330px] h-[350px] lg:h-[400px] pb-[50px] lg:pb-[0px]"
        >
          {isDesktop ? (
            <div
              className="absolute w-[280px] h-[350px] bottom-0 left-0"
              style={{
                background: `url(/src/assets/images/purple_small.png)`,
                backgroundSize: "auto 100%",
                backgroundPosition: "50% 50%",
              }}
            ></div>
          ) : null}
          <div className="pt-[174px] w-[100%] flex flex-wrap justify-start items-start">
            <div className="w-[100%] minW-[100%] flex">
              <div
                style={{
                  boxShadow: "0px 5px 15px 0px #0000001A",
                }}
                className="hover:bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E]
          rounded-[50%] bg-[#FFFFFF] flex items-center justify-center h-[30px] w-[30px]"
              >
                <StarSvg />
              </div>
              <button
                style={{
                  boxShadow: "0px 15px 20px 0px #EAA89F33",
                }}
                className="md:w-[85px] md:h-[25px] lg:w-[103px] lg:h-[30px]
         transition duration-500 md:bg-[#00000080] leading-none rounded-[20px]
         hover:bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] text-[12px] ml-[5px]"
              >
                127 sightings
              </button>
            </div>
            <h2
              className="block mt-[20px] text-[35px]
             leading-none h-[35px] block leading-[40px] w-full text-left"
            >
              Balloon Flower
            </h2>
          </div>
          <p className="w-full text-[17px] leading-none h-[17px] mt-[10px] opacity-[7]">
            Platycodon grandiflorus
          </p>
        </div>
        <div
          className="pt-[25px] px-[40px] flex lg:justify-end lg:mt-[-100px] lg:mb-[75px]
         lg:max-w-[1220px] lg:mx-auto z-[5] relative"
        >
          <button
            onClick={() => {
              navigate("newSighting");
            }}
            style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
            className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[188px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF] mt-[-50px] block lg:mr-[80px]"
          >
            + Add New Sighting
          </button>
        </div>
      </section>
      <section className=" text-[#949EA0] text-[14px] leading-[25px] lg:max-w-[1220px] lg:mx-auto">
        <div className="mt-[34px] px-[40px] lg:px-[20px] lg:flex lg:flex-wrap">
          <div className="h-[100px] lg:w-[330px] lg:pt-[50px]">
            <p>Kingdom: Plantae</p>
            <p>Order: Asterales</p>
            <p>Family: Campanulaceae</p>
            <p>Species: P. grandiflorus</p>
          </div>
          <div className="pt-[34px] lg:pt-0 text-[13px] leading-[20px] text-justify lg:w-[750px]">
            <p>
              Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and
              κώδων "bell") is a species of herbaceous flowering perennial plant
              of the family Campanulaceae, and the only member of the genus
              Platycodon. It is native to East Asia (China, Korea, Japan, and
              the Russian Far East).[1] It is commonly known as balloon
              flower[2][3] (referring to the balloon-shaped flower buds),
              Chinese bellflower,[2] or platycodon.[2]
            </p>
            <p className="mt-[20px]">
              Growing to 60 cm (24 in) tall by 30 cm (12 in) wide, it is an
              herbaceous perennial with dark green leaves and blue flowers in
              late summer. A notable feature of the plant is the flower bud
              which swells like a balloon before fully opening.[4] The five
              petals are fused together into a bell shape at the base, like its
              relatives, the campanulas. There are varieties with white, pink
              and purple blooms in cultivation.[5] In Korea, white flowers are
              more common. This plant[6] together with its cultivars 'Apoyama
              group'[7] and 'Mariesii'[8] have gained the Royal Horticultural
              Society's Award of Garden Merit.
            </p>
          </div>
          {isDesktop ? (
            <div className="mt-[25px] h-[1px] w-[100%] bg-[#E8E9ED]"></div>
          ) : null}
        </div>
      </section>
      <section className="mx-auto lg:max-w-[1220px] mt-[20px] flex flex-wrap justify-start p-[12px]">
        {sightings?.map((item: ISighting) => (
          <div
            key={item.id}
            className="p-[8px] w-[100%] md:w-[33%] lg:max-w-[25%]"
          >
            <SightingItem item={item} />
          </div>
        ))}
      </section>
    </>
  );
};

export default FlowerPage;
