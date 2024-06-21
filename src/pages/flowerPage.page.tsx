import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useStore from "../store";
import { getSightingsFunction } from "../api/appApi";
import SightingItem from "../components/SightingItem";
import { useNavigate } from "react-router-dom";
import { mockedISightings } from "../shared/data/mockedData/mockedSighints";

const FlowerPage = () => {
  // hooks
  const navigate = useNavigate();
  const store = useStore();

  const { data, isLoading } = useQuery(
    ["sightings"],
    async (s: any = {}) => await getSightingsFunction({}),
    {
      onError(error) {
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      },
    }
  );

  useEffect(() => {
    getSightingsFunction({});
  }, []);

  // let sightings = Array.isArray(data?.items) ? data.items : [];
  // mocked data given
  let sightings = mockedISightings;

  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `url(../src/assets/images/purple_small.png)`,
          }}
          className="text-[#FFFFFF] px-[40px] h-[350px]"
        >
          <div className="pt-[174px] w-[100%] flex flex-wrap justify-start items-start">
            <div className="w-[100%] minW-[100%]">asd</div>
            <h2
              className="block mt-[20px] text-[35px]
             leading-none h-[35px] block leading-[40px] w-full text-left"
            >
              Balloon Flower
            </h2>
          </div>
          <p className="w-full text-[17px] leading-none h-[17px] mt-[10px] opacity-[7]">
            opacity-7
          </p>
        </div>
        <div className="pt-[25px] px-[40px]">
          <button
            onClick={() => {
              navigate("newSighting");
            }}
            style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
            className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[188px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF] mt-[-50px] block"
          >
            + Add New Sighting
          </button>
        </div>
      </section>
      <section className=" text-[#949EA0] text-[14px] leading-[25px]">
        <div className="mt-[34px] px-[40px]">
          <div className="h-[100px]">
            <p>Kingdom: Plantae</p>
            <p>Order: Asterales</p>
            <p>Family: Campanulaceae</p>
            <p>Species: P. grandiflorus</p>
          </div>
          <div className="pt-[34px] text-[13px] leading-[20px] text-justify">
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
        </div>
      </section>
      <section className="w-full pt-[20px] flex flex-wrap justify-center pb-[16px]">
        {sightings?.map((item: ISighting, i) => (
          <div key={i} className="w-full">
            <SightingItem item={item} />
          </div>
        ))}
      </section>
    </>
  );
};

export default FlowerPage;
