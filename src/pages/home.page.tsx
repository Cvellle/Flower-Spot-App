import { useEffect } from "react";

import SearchInputComponent from "../shared/components/SearchInputComponent";
import useStore from "../store";
import { useQuery } from "@tanstack/react-query";
import FlowerItem from "../components/FlowerItem";
import { getFlowersFunction } from "../api/appApi";
import { toast } from "react-toastify";

const HomePage = () => {
  const store = useStore();
  const { data, isLoading } = useQuery(
    ["flowers"],
    async (f: any = {}) => await getFlowersFunction(f),
    {
      select(data) {
        return data;
      },
      onError(error) {
        store.setRequestLoading(false);
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: "top-right",
            })
          );
        } else {
          toast.error((error as any).response.data.message, {
            position: "top-right",
          });
        }
      },
    }
  );

  let flowers = Array.isArray(data?.items) ? data.items : [];

  useEffect(() => {
    getFlowersFunction({});
    let flowers = Array.isArray(data?.items) ? data : [];
  }, [data]);

  return (
    <div className="min-h-screen">
      <section className="pt-[80px]">
        <div
          style={{ backgroundImage: `url(./src/assets/images/purpleFl.png)` }}
          className="h-[500px] text-[#FFFFFF]"
        >
          <div className="width-full flex justify-center">
            <h2 className="mt-[184px] mb-[25px] text-[40px] text-center w-[385px] md:w-[unset] leading-none h-[80px] block leading-[40px]">
              Discover flowers around you
            </h2>
          </div>
          <p className="text-center text-[17px] leading-none h-[17px] mt-[14px]">
            Explore between more than 8.427 sightings
          </p>
          <div
            className="mx-auto mt-[58px] [&_input]:w-[307px] md:[&_input]:w-[458px] lg:[&_input]:w-[600px] h-[56px] md:h-[70px] md:w-[600px]
           flex justify-center"
          >
            <SearchInputComponent
              placeholder={"Looking for something specific?"}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto lg:max-w-[1220px] mt-[32px] flex flex-wrap justify-start p-[8px]">
        {flowers?.map((item: IFlower) => (
          <div
            key={item.id}
            className="p-[8px] w-[50%] md:w-[33%] lg:max-w-[25%]"
          >
            <FlowerItem item={item} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
