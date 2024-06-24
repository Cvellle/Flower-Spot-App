import { useQuery } from "@tanstack/react-query";
import { getSightingsFunction } from "../api/appApi";
import { toast } from "react-toastify";
import { mockedSightings } from "../shared/data/mockedData/mockedSighints";
import SightingItem from "../components/SightingItem";
import { isDesktop } from "../shared/constants/screenMatch";
import { useNavigate } from "react-router-dom";

const Sightings = () => {
  const navigate = useNavigate();

  // started and left as an example - here because the form register
  // mocked data given - because of cors
  const { data, isLoading } = useQuery(
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
      <section className="pt-[35px] flex flex-wrap justify-center">
        <div className="text-[#949EA0] [&>*]:text-center flex mt-[80px] lg:w-[1180px]">
          <div className="lg:w-[33%]"></div>
          <div className="lg:w-[33%]">
            <h2 className="text-[24] lg:text-[40px] leading-none">
              Sighting List
            </h2>
            <h3 className="mt-[13px] text-[12px] lg:text-[17ox] leading-none">
              Explore between more than 8.427 sightings
            </h3>
          </div>
          <div className="lg:w-[33%] flex lg:justify-end items-start">
            {isDesktop ? (
              <button
                onClick={() => {
                  navigate("/flower/1/new-sighting");
                }}
                style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
                className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[188px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
              >
                + Add New Sighting
              </button>
            ) : null}
          </div>
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
        <div className="w-full flex">
          <button
            onClick={() => {
              navigate("/flower/1/new-sighting");
            }}
            style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
            className="my-[60px] mx-auto bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[188px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
          >
            + Add New Sighting
          </button>
        </div>
      </section>
    </>
  );
};

export default Sightings;
