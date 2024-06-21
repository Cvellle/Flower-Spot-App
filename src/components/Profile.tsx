import { useMutation } from "@tanstack/react-query";
import useStore from "../store";
import { removeTokens } from "../shared/helpers/authHelpers";
import { getDate } from "../shared/helpers/timeHelpers";

interface IProfile {
  successHandler: (data?: any) => void;
}

const Profile = ({ successHandler }: IProfile) => {
  const store = useStore();

  const logoutUserHandler = () => {
    removeTokens();
    store.setAuthUser(null);
    successHandler();
  };

  return (
    <section
      className="px-[48px] md:px-[110px] bg-[#FFFFFF] place-items-start justify-center h-[calc(100vh_-_80px)] w-full
      md:w-[590px] md:h-[610px] font-ubuntu rounded-[3.2px] shadow-[0px 15px 30px 0px #0000000D] pt-[67px]"
    >
      <div className="mx-auto text-[#334144] pb-[50px] md:pb-[0px]">
        <div className="flex items-center">
          <div
            style={{
              backgroundImage: `url(./src/assets/images/user.png)`,
              backgroundSize: "80px 80px",
            }}
            className="w-[80px] h-[80px] rounded-full"
          ></div>
          <div className="flex flex-col justify-between h-[44px] ml-[30px]">
            <p className="text-[25px] leading-[25px] text-[#334144] font-[300]">
              {store.authUser?.firstName + " " + store.authUser?.lastName}
            </p>
            <p className="text-[13px] leading-[13px] text-[#949EA0]">
              {store.authUser?.sightingsNum + " sightings"}
            </p>
          </div>
        </div>
        <div className="[&_p]:text-[18px] [&>small]:block [&>small]:text-[#949EA0] [&>small]:text-[10px] [&>*]:leading-none">
          <small className="mt-[44px]">First Name</small>
          <p className="display_item">{store.authUser?.firstName}</p>
          <small className="mt-[26px]">Last Name</small>
          <p className="display_item">{store.authUser?.lastName}</p>
          <small className="mt-[26px]">Date of Birth</small>
          <p className="display_item">
            {getDate(store?.authUser?.dateOfBirth)}
          </p>
          <small className="mt-[26px]">Email Address</small>
          <p className="display_item">{store.authUser?.email}</p>
        </div>
        <div className="w-[380px]"></div>
        <button
          onClick={() => logoutUserHandler()}
          className="mb-[50px] md:mb-[0] block w-[150px] rounded-[3.2px] mx-auto h-[50px] mt-[84px]
           bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] font-[500] text-[#FFFFFF]"
          type={"submit"}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
