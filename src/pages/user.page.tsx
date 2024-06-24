import SightingItem from "../components/SightingItem";
import { mockedISightings } from "../shared/data/mockedData/mockedSighints";

const User = () => {
  // mocked data given
  let sightings = mockedISightings;

  return (
    <>
      <section className="pt-[80px] lg:max-w-[1220px] mx-auto">
        <div className="flex items-start justify-between text-[#334144] pl-[33px] md:pl-[51px] pr-[17px] md:pr-[71px]">
          <div className="md:flex md:items-center">
            <div
              style={{
                backgroundImage: `url(/src/assets/images/user1.png)`,
                backgroundSize: `contain`,
              }}
              className="w-[80px] h-[80px] rounded-full mt-[35px] md:mr-[30px]"
            ></div>
            <div className="w-auto h-[44px] mt-[35px] items-between">
              <p className="text-[25px] leading-[25px] text-[#334144] font-[300]">
                Adam Moore
              </p>
              <p className="text-[13px] leading-[13px] text-[#949EA0]">
                47 sightings
              </p>
            </div>
          </div>
          <div className="flex pt-[47px]">
            <button
              onClick={() => {
                return;
              }}
              className="text-[#FFFFFF] w-[110px] rounded-[3.2px] mx-auto h-[50px] bg-gradient-to-r
               from-[#ECBCB3] to-[#EAA79E] font-[500] text-[14px] shadow-[0px 15px 20px 0px rgba(234, 168, 159, 0.2)]
"
            >
              Report
            </button>
          </div>
        </div>
      </section>
      <section className="pt-[35px] mx-auto lg:max-w-[1220px] mt-[32px] flex flex-wrap justify-start p-[8px]">
        {sightings?.map((item: ISighting, i) => (
          <div
            key={i}
            className="p-[8px] w-[100%] md:w-[33%] lg:max-w-[25%] px-[8px]"
          >
            <SightingItem item={item} />
          </div>
        ))}
      </section>
    </>
  );
};

export default User;
