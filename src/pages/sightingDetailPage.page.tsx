import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CommentSVG } from "../assets/icons/Comment";
import { HeartSVG } from "../assets/icons/HeartSvg";
import { LocationSvg } from "../assets/icons/LocationSvg";
import TextareaComponent from "../components/TextareaComponent";
import { isDesktop, isTablet } from "../shared/constants/screenMatch";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import { addCommentFn } from "../api/appApi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface CommentInput {
  content: string;
}

const SightingDetailPage = () => {
  const navigate = useNavigate();
  const { sightingId } = useParams();

  const registerSchema = object({
    name: string().min(1, "Comment is required"),
  });

  const methods = useForm<{ content: string }>({
    resolver: zodResolver(registerSchema),
  });

  // started and left as an example - here because the form register
  const { mutate: addComment, data } = useMutation(
    (commentData: { sightingId: string; body: { content: string } }) =>
      addCommentFn(commentData),
    {
      onError(error) {
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      },
    }
  );

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<CommentInput> = (values) => {
    addComment({
      sightingId: sightingId as string,
      body: values,
    });
  };

  const items = [
    {
      image: "/src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
      userId: "1",
    },
    {
      image: "/src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
      userId: "1",
    },
    {
      image: "/src/assets/images/blueFl.png",
      desc: 'Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell") is a species of herbaceous flowering perennial plant of the …',
      userId: "1",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] relative">
      <section className="pt-[80px]">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(249, 249, 249, 0.0001) 0%, #F9F9F9 100%), url(/src/assets/images/map_sm.png)`,
            backgroundSize: isDesktop ? "100% auto" : "190% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: isDesktop
              ? "top 0px left 50%, top -8.19vw left 50%"
              : "top 0px left 50%, top 0vw left 50%",
          }}
          className="lg:absolute w-[100%] h-[95.23vw] md:h-[400px] flex items-start justify-between
           lg:justify-end text-[#334144] px-[40px] lg:px-[0] lg:pt-[244px] lg:pl-[0px]"
        >
          <div className="absolute left-[28.57%] top-[calc(30.90vw_+_80px)] lg:top-[11.22vw] lg:left-[32.78vw]">
            {isDesktop ? (
              <LocationSvg height="3.27vw" width="2.45vw" />
            ) : (
              <LocationSvg height="6.81vw" width="9.09vw" />
            )}
          </div>
          <div className="lg:flex w-full  lg:items-center lg:justify-center mx-[auto]">
            <div
              className="flex w-full lg:w-[1180px] rounded-full mt-[22px] lg:mt-[0] justify-between
             lg:justify-end h-[50px]"
            >
              <button
                style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
                className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[200px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF] lg:mr-[20px]"
              >
                View on Google Maps
              </button>
              <button
                className="ml-[10px] text-[#DF9186] w-[110px] rounded-[3.2px] h-[50px] bg-[#FFFFFF]
               font-[500] text-[14px] shadow-[0px 15px 20px 0px rgba(234, 168, 159, 0.2)] lg:mr-[20px] lg:mr-[0px]"
              >
                Report
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative lg:max-w-[1180px] mx-[auto] lg:bg-[#FFFFFF] mt-[-160px] lg:mt-[324px] px-[16px]
         lg:p-[50px] flex flex-wrap z-[4]"
        style={{
          boxShadow: isTablet ? "0px 15px 30px 0px #0000000D" : "unset",
        }}
      >
        <div
          style={{
            backgroundImage: `url(/src/assets/images/blueFl.png)`,
            backgroundSize: "170% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 0% left 0%",
          }}
          className="h-[290px] w-full lg:w-[290px] text-[#FFFFFF]"
        ></div>
        <div className="lg:w-[710px] lg:ml-[40px] lg:max-h-[290px]">
          <div className="w-full lg:flex-wrap">
            <div className="flex items-center mt-[30px] lg:w-full">
              <div
                style={{
                  backgroundImage: `url(/src/assets/images/user1.png)`,
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
          <div className="w-full lg:h-[170px] lg:h-[unset] mt-[30px] text-[#949EA0] text-[13px] leading-[20px] text-justify">
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
            <div className="h-[0.8px] bg-[#E8E9ED] mt-[30px] mb-[20px]"></div>
            <div className="flex text-[12px] leading-none text-[#949EA0] lg:h-[100%]">
              <div className="flex items-end mb-[15px] ">
                <div className="ml-[20px] mr-[30px]">
                  <CommentSVG />
                </div>{" "}
                <span>18 Comments</span>
              </div>
              <div className="flex items-end mb-[15px]">
                <div className="ml-[22.69px] mr-[30px]">
                  <HeartSVG />
                </div>{" "}
                <span>18 Favorites</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:max-w-[780px] mx-[auto] lg:mt-[40px] relative z-[2]">
        <div className="flex px-[16px] lg:px-[unset] justify-between lg:border-t lg:border-[#E8E9ED]">
          <h3 className="mt-[125px] text-[25px] leading-none">14 Comments</h3>
          <button
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
      <section className="min-h-screen pt-[35px] flex flex-wrap justify-center pb-[16px] lg:max-w-[780px] mx-[auto]">
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
                    onClick={() => {
                      navigate("/user/" + item.userId);
                    }}
                    style={{
                      backgroundImage: `url(/src/assets/images/user1.png)`,
                      backgroundSize: "100% 100%",
                    }}
                    className="w-[40px] h-[40px] rounded-full"
                  ></div>
                  <div className="flex flex-col justify-between h-[30px] ml-[20px]">
                    <p className="text-[15px] leading-[15px] text-[#334144] font-[300]">
                      Michael bebe
                    </p>
                    <p className="italic text-[12px] leading-[12px] text-[#949EA0]">
                      By Adam Moore
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
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="w-full px-[16px] flex flex-wrap"
          >
            <div
              className={`w-full lg:[&_textarea]:h-[${
                isDesktop ? "150px" : "242px"
              }]`}
            >
              <TextareaComponent
                name={"content"}
                label={"Write a comment"}
                height={isDesktop ? "150px" : "242px"}
              />
            </div>
            <button
              type="submit"
              style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
              className="mt-[20px] mr-[20px] lg:mr-[0px] ml-auto bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[160px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
            >
              Publish Comment
            </button>
          </form>
        </FormProvider>
      </section>
    </div>
  );
};

export default SightingDetailPage;
