import SightingItem from "../components/SightingItem";

const User = () => {
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
    <>
      <section className="pt-[80px]">
        <div className="flex items-start justify-between text-[#334144] pl-[33px] md:pl-[30px] pr-[17px]">
          <div className="md:flex md:items-center">
            <div
              style={{
                backgroundImage: `url(../src/assets/images/user1.png)`,
                backgroundSize: `contain`,
              }}
              className="w-[80px] h-[80px] rounded-full mt-[35px] md:mr-[30px]"
            ></div>
            <div className="w-auto h-[44px] mt-[35px] items-between">
              <p className="text-[25px] leading-[25px] text-[#334144] font-[300]">
                Miical bebe
              </p>
              <p className="text-[13px] leading-[13px] text-[#949EA0]">
                asdasdas
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
      <section className="min-h-screen pt-[35px] flex flex-wrap justify-center pb-[16px]">
        {items?.map((item: ISighting, i) => (
          <div key={i}>
            <SightingItem item={item} />
          </div>
        ))}
      </section>
    </>
  );
};

export default User;
