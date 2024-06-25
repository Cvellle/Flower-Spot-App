import { SyntheticEvent, useEffect, useState } from "react";
import SearchInputComponent from "../shared/components/SearchInputComponent";
import { useQuery } from "@tanstack/react-query";
import FlowerItem from "../components/FlowerItem";
import { getFlowersFunction } from "../api/appApi";
import { toast } from "react-toastify";
import { isTablet } from "../shared/constants/screenMatch";

const HomePage = () => {
  // hooks
  const [filterState, setFilterState] = useState<string>("");

  // query hook
  const { data } = useQuery(
    ["flowers"],
    async () => await getFlowersFunction(),
    {
      onError(error) {
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      },
    }
  );

  let flowers = Array.isArray(data?.items) ? data?.items : [];

  return (
    <div className="min-h-screen pt-[80px]">
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url(./src/assets/images/purpleFl.png)`,
            backgroundSize: isTablet ? "100%" : "auto 100%",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
          className="min-h-[500px] text-[#FFFFFF]"
        >
          <div className="width-full flex justify-center">
            <h2 className="mt-[104px] lg:mt-[154px] text-[40px] text-center w-[385px] md:w-[unset] leading-none h-[80px] md:h-[unset] block leading-none">
              Discover flowers around you
            </h2>
          </div>
          <p className="text-[#FFFFFF] opacity-[0.7] mt-[25px] md:mt-[15px] text-center text-[17px] leading-none h-[17px]">
            Explore between more than 8.427 sightings
          </p>
          <div
            className="mx-auto mt-[58px] [&_input]:w-[307px] md:[&_input]:w-[458px]
             lg:[&_input]:w-[600px] h-[56px] md:h-[70px] md:w-[600px] flex justify-center"
          >
            <SearchInputComponent
              placeholder={"Looking for something specific?"}
              changeHandler={(value: string, event: SyntheticEvent) => {
                event && setFilterState(value);
              }}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto lg:max-w-[1220px] mt-[34px] flex flex-wrap justify-start p-[8px]">
        {flowers
          ?.filter((filterItem: IFlower) =>
            filterItem.name.includes(filterState)
          )
          ?.map((flower: IFlower) => (
            <div
              key={flower.id}
              className="p-[8px] w-[50%] md:w-[33%] lg:max-w-[25%]"
            >
              <FlowerItem item={flower} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default HomePage;
