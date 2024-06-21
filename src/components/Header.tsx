import useStore from "../store";
import { useEffect, useState } from "react";
import DialogComponent from "../shared/components/DialogComponent";
import Settings from "./Settings";
import SignUp from "./Signup";
import { useAuth } from "../router/useAuth";
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import { isDesktop } from "../shared/constants/screenMatch";
import { getMeFn } from "../api/authApi";
import { NavCloseSgv } from "../assets/icons/NavCloseSvg";
import LogIn from "./Login";

const Header = () => {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      let userResponse = async () => {
        let res = await getMeFn();
        if (res) {
          store.setAuthUser(res);
        }
      };
      userResponse();
    }
  }, []);

  // types
  enum DialogTypes {
    SignUp = "signUp",
    LogIn = "logIn",
    Settings = "settings",
    Profile = "profile",
  }

  // hooks and consts
  const store = useStore();
  const user = store.authUser;
  const navigate = useNavigate();

  //states
  const [showModal, setShowModal] = useState<DialogTypes | undefined>(
    undefined
  );
  const [navbarOpen, setNavbarOpen] = useState(false);

  let headerVisible = !navbarOpen
    ? scrollDir === "scrolling up" || window.scrollY <= 80
    : true;

  return (
    <>
      {showModal !== undefined || headerVisible ? (
        <header className="fixed w-full z-[100] lg:z-[10] [&_*]:border-[none] [&_*]:shadow-[none]">
          <nav
            style={{
              boxShadow: isDesktop ? "0px 15px 30px 0px #0000000D" : "none",
            }}
            className="min-h-[80px] relative flex flex-wrap items-center justify-between bg-[#FFFFFF]"
          >
            <div className="mx-auto lg:max-w-[1220px] flex flex-wrap items-center justify-between h-[80px] w-full">
              <div
                style={{
                  boxShadow: isDesktop ? "none" : "0px 15px 30px 0px #0000000D",
                }}
                className="h-[80px] pl-[24.72px] pr-[28px] lg:pl-[0] lg:pr-[3.8px] flex relative flex justify-between w-full lg:w-auto 
             lg:block lg:justify-start lg:flex lg:items-center"
              >
                <div
                  onClick={() => {
                    navigate("/");
                    setShowModal(undefined);
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <div className={"w-[30px] h-[30px]"}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_66160_794)">
                        <path
                          d="M15 17.9297C13.3846 17.9297 12.0703 16.6154 12.0703 15C12.0703 13.3846 13.3846 12.0703 15 12.0703C16.6155 12.0703 17.9297 13.3846 17.9297 15C17.9297 16.6154 16.6155 17.9297 15 17.9297ZM15 13.2422C14.0308 13.2422 13.2422 14.0307 13.2422 15C13.2422 15.9693 14.0308 16.7578 15 16.7578C15.9693 16.7578 16.7578 15.9693 16.7578 15C16.7578 14.0307 15.9692 13.2422 15 13.2422Z"
                          fill="#FABFB7"
                        />
                        <path
                          d="M2.56727 18.7688C2.62241 17.5942 2.67936 16.3826 3.53759 15C2.67942 13.6174 2.62247 12.4059 2.56727 11.2312C2.52134 10.2524 2.47376 9.24029 1.9743 8.01398C1.9061 7.84641 1.91911 7.65668 2.00958 7.5C2.10005 7.34332 2.25784 7.23721 2.43708 7.21248C3.74882 7.03189 4.64911 6.56695 5.51975 6.11742C6.56454 5.57789 7.64372 5.02096 9.2687 5.07334C10.0369 3.63879 11.0577 2.98371 12.0474 2.34861C12.8722 1.81939 13.7249 1.27213 14.5372 0.226465C14.6482 0.0836133 14.8189 0 14.9999 0C15.1809 0 15.3517 0.0836133 15.4626 0.226523C15.6784 0.504316 15.9026 0.755273 16.1479 0.993809C16.3799 1.21939 16.3852 1.59035 16.1596 1.82238C15.9341 2.05436 15.5631 2.05969 15.331 1.8341C15.2169 1.72312 15.1067 1.60992 14.9997 1.49344C14.2086 2.35418 13.404 2.87051 12.6803 3.33492C11.7354 3.94131 10.9107 4.47082 10.2841 5.66027L10.5501 6.121C10.712 6.40125 10.6159 6.75961 10.3357 6.92139C10.2434 6.97471 10.1427 7.00002 10.0433 7.00002C9.84081 7.00002 9.64382 6.8949 9.5353 6.70693L9.26928 6.24621C7.92608 6.1943 7.05503 6.64354 6.05741 7.15869C5.29323 7.55326 4.44386 7.99189 3.30268 8.24666C3.65266 9.36228 3.69749 10.3172 3.73786 11.1763C3.79053 12.2979 3.83677 13.2768 4.55354 14.4142H5.08558C5.40913 14.4142 5.67151 14.6765 5.67151 15.0001C5.67151 15.3237 5.40913 15.5861 5.08558 15.5861H4.55348C3.83676 16.7234 3.79053 17.7023 3.73786 18.8238C3.69755 19.6829 3.65266 20.6378 3.30268 21.7535C4.44386 22.0083 5.29323 22.4469 6.05741 22.8415C7.05503 23.3566 7.92614 23.806 9.26934 23.754L9.53536 23.2932C9.6972 23.013 10.0554 22.917 10.3358 23.0788C10.616 23.2406 10.712 23.5989 10.5502 23.8792L10.2842 24.34C10.9107 25.5294 11.7354 26.0589 12.6804 26.6653C13.4042 27.1297 14.2087 27.6461 14.9999 28.5069C15.7911 27.6461 16.5957 27.1297 17.3195 26.6653C18.2644 26.0589 19.0891 25.5294 19.7157 24.34L19.4497 23.8792C19.2878 23.599 19.3839 23.2406 19.6641 23.0788C19.9444 22.9169 20.3027 23.013 20.4645 23.2933L20.7305 23.7541C22.074 23.8062 22.9448 23.3568 23.9423 22.8416C24.7065 22.447 25.5559 22.0084 26.6971 21.7536C26.3471 20.638 26.3023 19.683 26.2619 18.8239C26.2093 17.7025 26.163 16.7235 25.4463 15.5861H24.9142C24.5906 15.5861 24.3283 15.3238 24.3283 15.0002C24.3283 14.6766 24.5906 14.4142 24.9142 14.4142H25.4463C26.163 13.2769 26.2093 12.2979 26.2619 11.1765C26.3023 10.3174 26.3471 9.36246 26.6971 8.24678C25.5559 7.99201 24.7065 7.55344 23.9423 7.15881C22.9447 6.64365 22.0737 6.1943 20.7305 6.24633L20.4644 6.70705C20.3559 6.89502 20.159 7.00014 19.9565 7.00014C19.8571 7.00014 19.7563 6.97477 19.6641 6.9215C19.3838 6.75973 19.2878 6.40137 19.4496 6.12111L19.7157 5.66027C19.605 5.4498 19.486 5.25521 19.3551 5.07164C19.1673 4.80814 19.2286 4.44223 19.4921 4.25443C19.7556 4.06658 20.1216 4.12793 20.3093 4.39143C20.4626 4.60641 20.6021 4.83176 20.7313 5.07346C22.3573 5.02201 23.4353 5.57807 24.48 6.11754C25.3507 6.56713 26.251 7.03207 27.5627 7.21266C27.742 7.23732 27.8998 7.34344 27.9902 7.50018C28.0807 7.65686 28.0937 7.84658 28.0254 8.01416C27.526 9.24047 27.4785 10.2526 27.4325 11.2314C27.3773 12.4061 27.3204 13.6177 26.4622 15.0002C27.3204 16.3828 27.3773 17.5943 27.4325 18.7689C27.4784 19.7477 27.526 20.7599 28.0254 21.9862C28.0937 22.1538 28.0807 22.3435 27.9902 22.5002C27.8998 22.6569 27.742 22.763 27.5627 22.7877C26.251 22.9683 25.3507 23.4332 24.48 23.8828C23.4352 24.4223 22.3568 24.9791 20.731 24.9268C19.9628 26.3614 18.942 27.0165 17.9524 27.6516C17.1276 28.1808 16.2749 28.728 15.4626 29.7737C15.3516 29.9166 15.1809 30.0002 14.9999 30.0002C14.819 30.0002 14.6482 29.9166 14.5372 29.7737C13.7249 28.728 12.8722 28.1808 12.0474 27.6516C11.0577 27.0165 10.0369 26.3614 9.2687 24.9268C7.64342 24.979 6.5646 24.4223 5.51975 23.8828C4.64911 23.4332 3.74876 22.9683 2.43708 22.7877C2.25784 22.763 2.10005 22.6569 2.00958 22.5002C1.91911 22.3434 1.9061 22.1538 1.9743 21.9862C2.47376 20.7597 2.52134 19.7476 2.56727 18.7688Z"
                          fill="#FFD4CE"
                        />
                        <path
                          d="M24.4348 9.22372C24.6087 9.32785 24.7165 9.51452 24.7197 9.71726C24.7513 11.7267 23.9895 13.6208 22.6589 14.9974C24.0067 16.3831 24.7513 18.2748 24.7197 20.2826C24.7165 20.4853 24.6087 20.672 24.4348 20.7761C23.2434 21.4892 21.9145 21.8533 20.5883 21.8533C19.9966 21.8533 19.4055 21.7801 18.8273 21.6338C18.3005 23.4745 17.041 25.0815 15.2849 26.0588C15.1963 26.1081 15.0981 26.1328 15 26.1328C14.9019 26.1328 14.8037 26.1081 14.7151 26.0588C12.9589 25.0815 11.6995 23.4745 11.1727 21.6339C10.5945 21.7802 10.0034 21.8534 9.41162 21.8533C8.08553 21.8533 6.75656 21.4892 5.56518 20.7762C5.39121 20.6721 5.2834 20.4854 5.28024 20.2826C5.24859 18.2749 5.99332 16.3832 7.34104 14.9974C6.01043 13.6208 5.24859 11.7267 5.28024 9.71732C5.28346 9.51458 5.39127 9.3279 5.56518 9.22378C7.28959 8.19165 9.3109 7.90437 11.1683 8.36843C11.6945 6.50843 12.9604 4.91767 14.715 3.94115C14.8921 3.84253 15.1077 3.84253 15.2849 3.94115C17.0395 4.91767 18.3054 6.50843 18.8316 8.36849C20.6891 7.90437 22.7103 8.19166 24.4348 9.22372ZM17.5946 10.119C17.5084 10.1688 17.4236 10.221 17.3399 10.2751C18.0945 10.6502 18.747 11.2008 19.2438 11.8733L19.8271 11.5365C20.1073 11.3746 20.4657 11.4708 20.6275 11.751C20.7893 12.0312 20.6933 12.3896 20.413 12.5514L19.8312 12.8873C20.1153 13.5345 20.2734 14.2491 20.2734 15C20.2734 15.1128 20.2694 15.2247 20.2624 15.3358C20.3508 15.2905 20.4382 15.2432 20.5243 15.1935C22.3322 14.1496 23.4687 12.2066 23.5447 10.0667C21.6536 9.06247 19.4026 9.07519 17.5946 10.119ZM16.0032 11.023C15.682 10.9419 15.3461 10.8984 15 10.8984C14.6539 10.8984 14.3178 10.9419 13.9965 11.023C13.9893 11.0248 13.9822 11.0265 13.975 11.0281C12.2077 11.4844 10.8984 13.0921 10.8984 15C10.8984 17.2616 12.7383 19.1015 15 19.1015C17.2616 19.1015 19.1015 17.2616 19.1015 15C19.1015 13.0922 17.7923 11.4845 16.0252 11.0281C16.0178 11.0265 16.0105 11.0248 16.0032 11.023ZM23.5449 19.9333C23.4901 18.3429 22.8595 16.8621 21.7764 15.7706C21.5638 15.9279 21.3419 16.0745 21.1102 16.2083C20.7495 16.4165 20.3703 16.5925 19.9799 16.7346C19.9351 16.8629 19.8854 16.989 19.8311 17.1126L20.4129 17.4485C20.6932 17.6103 20.7892 17.9687 20.6274 18.2489C20.5189 18.4369 20.322 18.542 20.1195 18.542C20.0201 18.542 19.9193 18.5166 19.827 18.4634L19.2437 18.1266C19.1636 18.235 19.0796 18.3404 18.9916 18.4422C19.0642 18.8524 19.1015 19.2698 19.1015 19.6874C19.1015 19.9549 19.0854 20.2203 19.0556 20.483C20.5426 20.8754 22.1401 20.6811 23.5449 19.9333ZM15 24.8666C16.8152 23.7309 17.9297 21.7751 17.9297 19.6875C17.9297 19.5875 17.9269 19.4875 17.9218 19.3877C17.2384 19.8443 16.4428 20.1455 15.5859 20.2406V20.912C15.5859 21.2356 15.3236 21.4979 15 21.4979C14.6764 21.4979 14.4141 21.2356 14.4141 20.912V20.2406C13.5572 20.1455 12.7616 19.8442 12.0782 19.3876C12.0731 19.4875 12.0703 19.5874 12.0703 19.6874C12.0703 21.7751 13.1848 23.7308 15 24.8666ZM10.9443 20.4831C10.9144 20.2204 10.8984 19.9549 10.8984 19.6875C10.8984 19.2699 10.9357 18.8524 11.0083 18.4423C10.9204 18.3404 10.8363 18.235 10.7563 18.1266L10.173 18.4634C10.0807 18.5167 9.97998 18.5421 9.88061 18.5421C9.67811 18.5421 9.48117 18.4369 9.3726 18.249C9.21076 17.9687 9.3068 17.6104 9.58705 17.4486L10.1688 17.1127C10.1146 16.989 10.0649 16.863 10.0201 16.7346C9.62959 16.5925 9.25043 16.4165 8.88973 16.2083C8.65811 16.0746 8.43621 15.9279 8.22363 15.7707C7.14041 16.8622 6.50994 18.343 6.4551 19.9334C7.85983 20.6811 9.45738 20.8754 10.9443 20.4831ZM6.45527 10.0667C6.53115 12.2065 7.66764 14.1496 9.47566 15.1934C9.56174 15.2431 9.64916 15.2903 9.73758 15.3357C9.73055 15.2247 9.72656 15.1128 9.72656 15C9.72656 14.2491 9.88465 13.5345 10.1688 12.8873L9.58699 12.5514C9.30674 12.3895 9.2107 12.0312 9.37254 11.7509C9.53432 11.4707 9.89268 11.3747 10.1729 11.5365L10.7562 11.8733C11.253 11.2008 11.9055 10.6502 12.6601 10.2751C12.5764 10.221 12.4916 10.1688 12.4054 10.119C10.5973 9.07519 8.34621 9.06253 6.45527 10.0667ZM14.9999 5.13312C13.65 5.97582 12.6829 7.2623 12.2793 8.74607C12.5217 8.85154 12.7597 8.97037 12.9913 9.10414C13.3519 9.31232 13.6939 9.55261 14.0121 9.81968C14.1444 9.79449 14.2784 9.77427 14.414 9.75921V9.08785C14.414 8.76423 14.6764 8.50191 14.9999 8.50191C15.3236 8.50191 15.5859 8.76423 15.5859 9.08785V9.75921C15.7215 9.77427 15.8555 9.79449 15.9878 9.81968C16.3059 9.55267 16.6479 9.31232 17.0086 9.10414C17.2402 8.97042 17.4781 8.8516 17.7206 8.74607C17.317 7.2623 16.3499 5.97587 14.9999 5.13312Z"
                          fill="#E4988D"
                        />
                        <path
                          d="M17.8575 3.57019C17.5339 3.57019 17.2716 3.30787 17.2716 2.98425C17.2716 2.66064 17.5339 2.39832 17.8575 2.39832H17.858C18.1816 2.39832 18.4437 2.66064 18.4437 2.98425C18.4437 3.30787 18.1812 3.57019 17.8575 3.57019Z"
                          fill="#E4988D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_66160_794">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="matrix(-1 0 0 1 30 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h1 className="ml-[15px] text-[#EAA79E] font-[20px] font-[900]">
                    FlowrSpot
                  </h1>
                </div>
                {navbarOpen ? (
                  <div
                    className="my-auto"
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                    }}
                  >
                    <NavCloseSgv />
                  </div>
                ) : (
                  <button
                    className="flex flex-wrap items-between w-[24px] h-[16px] my-auto bg-tranparent text-white cursor-pointer text-xl leading-none rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <span className="block bg-[#949EA0] rounded h-[1.23px] w-[24px]"></span>
                    <span className="block bg-[#949EA0] rounded h-[1.23px] w-[24px]"></span>
                    <span className="block bg-[#949EA0] rounded h-[1.23px] w-[24px]"></span>
                  </button>
                )}
              </div>
              <div
                className={
                  "pl-[21px] lg:pl-[0] pr-[28px] lg:pr-[20px] w-full lg:w-[unset] overflow-scroll lg:overflow-hidden min-h-[calc(100vh_-_80px)] lg:min-h-[unset] bg-[#FFFFFF] lg:flex" +
                  (navbarOpen ? " flex" : " hidden")
                }
              >
                <ul
                  className="mt-[98px] lg:mt-[unset] w-full max-h-[280px] text-[#949EA0] flex font-[500]
                 flex-col lg:flex-row lg:items-center lg:flex-row list-none lg:ml-auto bg-[#FFFFFF]
                 lg:[&_li]:ml-[50px]"
                >
                  <li>
                    <Link to={"/"} className="flex items-center">
                      <span
                        onClick={() => {
                          setNavbarOpen(false);
                          setShowModal(undefined);
                        }}
                      >
                        Flowers
                      </span>
                    </Link>
                  </li>
                  <li className="mt-[45px] lg:mt-[0]">
                    <Link to={"sightings"} className="flex items-center">
                      <span
                        onClick={() => {
                          setNavbarOpen(false);
                          setShowModal(undefined);
                        }}
                      >
                        Latest Sightings
                      </span>
                    </Link>
                  </li>
                  <li className="mt-[35px] lg:mt-[0]">
                    <Link to={""} className="flex items-center">
                      <span>Favorites</span>
                    </Link>
                  </li>
                  {!useAuth() ? (
                    <li className="mt-[35px] lg:mt-[0]">
                      <span className="flex items-center cursor-pointer">
                        <span
                          onClick={() => {
                            setShowModal(DialogTypes.Settings);
                            setNavbarOpen(false);
                          }}
                        >
                          Settings
                        </span>
                      </span>
                    </li>
                  ) : null}
                  {!useAuth() ? (
                    <li className="mt-[45px] lg:mt-[0]">
                      <span className="flex items-center cursor-pointer">
                        <span
                          onClick={() => {
                            setShowModal(DialogTypes.LogIn);
                            setNavbarOpen(false);
                          }}
                          className="text-[#E19184]"
                        >
                          Login
                        </span>
                      </span>
                    </li>
                  ) : null}
                  <li>
                    {useAuth() ? (
                      user ? (
                        <div className="flex items-center mt-[35px] lg:mt-[0px]">
                          <p className="flex content-center">
                            {user?.firstName + " " + user?.lastName}
                          </p>
                          <div
                            style={{
                              background: `url(../src/assets/images/user.png) no-repeat`,
                              backgroundSize: "40px 40px",
                            }}
                            className="ml-[15px] lg:mt-[0] w-[40px] h-[40px] rounded-[50%] cursor-pointer"
                            onClick={() => {
                              setShowModal(DialogTypes.Profile);
                              setNavbarOpen(false);
                            }}
                          ></div>
                        </div>
                      ) : null
                    ) : (
                      <button
                        style={{
                          boxShadow: "0px 15px 20px 0px #EAA89F33",
                        }}
                        className="w-[140px] h-[41px] my-[52px] lg:my-[0] rounded-[20px] text-[14px]
                     bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] font-[500] text-[#FFFFFF]"
                        type={"submit"}
                        onClick={() => {
                          setShowModal(DialogTypes.SignUp);
                          setNavbarOpen(false);
                        }}
                      >
                        Create Account
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      ) : null}
      <div className="relative z-[50]">
        {/* Dialogs */}
        {showModal === DialogTypes.SignUp ? (
          <DialogComponent
            isOpen={true}
            closeHandler={() => setShowModal(undefined)}
          >
            <SignUp
              successHandler={() => {
                setShowModal(DialogTypes.LogIn);
                setNavbarOpen(false);
              }}
            />
          </DialogComponent>
        ) : null}
        {showModal === DialogTypes.LogIn ? (
          <DialogComponent
            isOpen={true}
            closeHandler={() => setShowModal(undefined)}
          >
            <LogIn
              successHandler={() => {
                setShowModal(undefined);
                setShowModal(DialogTypes.Profile);
              }}
            />
          </DialogComponent>
        ) : null}
        {showModal === DialogTypes.Profile ? (
          <DialogComponent
            isOpen={true}
            closeHandler={() => setShowModal(undefined)}
          >
            <Profile
              successHandler={() => {
                setShowModal(undefined);
              }}
            />
          </DialogComponent>
        ) : null}
        {showModal === DialogTypes.Settings ? (
          <DialogComponent
            isOpen={true}
            closeHandler={() => setShowModal(undefined)}
          >
            <Settings />
          </DialogComponent>
        ) : null}
      </div>
    </>
  );
};

export default Header;
