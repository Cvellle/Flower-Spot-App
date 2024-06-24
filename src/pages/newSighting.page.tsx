import { useEffect } from "react";
import { LocationSvg } from "../assets/icons/LocationSvg";
import { PhotoSvg } from "../assets/icons/PhotoSvg";
import FormInput from "../components/FormInput";
import TextareaComponent from "../components/TextareaComponent";
import { useMutation } from "@tanstack/react-query";
import { any, object, string, TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { addNewSightingFn } from "../api/appApi";
import { isDesktop, isTablet } from "../shared/constants/screenMatch";
import { toast } from "react-toastify";

export type INewSightingInputs = TypeOf<typeof registerSchema>;

interface INewSigthing {
  flowerId: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

const registerSchema = object({
  name: string().min(1, "Title is required").max(100),
  photo: any().refine((files) => files?.length == 1, "Image is required."),
  location: string().min(1, "Coordinates are required").max(100),
  description: string().min(1, "Description is required").max(100),
});

const NewSighting = () => {
  const { flowerId } = useParams();

  const methods = useForm<any>({
    resolver: zodResolver(registerSchema),
  });

  // left here as an example - cors protected
  const { mutate: addSighting, data } = useMutation(
    (sightingData: INewSigthing) => addNewSightingFn(sightingData),
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

  const onSubmitHandler: SubmitHandler<any> = (values) => {
    let testValues = "47.110579, 9.227568";
    let locationArr = testValues.split(",").map((el: string) => el.trim());
    addNewSightingFn({
      flowerId: flowerId as string,
      name: values.name,
      description: values.description,
      latitude: +locationArr[0],
      longitude: +locationArr[1],
    });
  };

  return (
    <div className="bg-[#F9F9F9] relative">
      <section className="pt-[80px]">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(249, 249, 249, 0.0001) 0%, #F9F9F9 100%), url(/src/assets/images/map_sm.png)`,
            backgroundSize: isTablet ? "100% auto" : "190% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 0px left 50%, top -8.19vw left 50%",
          }}
          className="md:absolute md:w-full h-[95.23vw] md:h-[400px] flex items-start justify-end text-[#334144] px-[40px] md:pl-[30px]"
        >
          <div className="md:flex md:items-center">
            <div className="absolute left-[28.57%] md:left-[32.78vw] top-[51.42vw] md:top-[11.22vw]">
              <LocationSvg height="3.27vw" width="2.45vw" />
            </div>
          </div>
          <div className="flex pt-[22px] md:w-full md:max-w-[1180px] md:mx-auto md:justify-end md:mt-[224px]">
            <button
              className="md:mr-[40px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[200px] h-[50px] rounded-[2.3px]
        text-[14px] font-[500] text-[#FFFFFF]"
            >
              View on Google Maps
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          boxShadow: "0px 15px 30px 0px #0000000D",
        }}
        className="md:mx-auto md:max-w-[1180px] mt-[-180px] md:mt-[324px] 
        px-[16px] flex flex-wrap z-[5] relative"
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="lg:flex lg:flex-wrap pt-[35px] w-full px-[24px] bg-[#FFFFFF]"
          >
            <div className="text-[#949EA0] [&>*]:text-center w-[100%]">
              <h2 className="text-[24] leading-[40px]">Add New Sighting</h2>
              <h3 className="my-[13px] text-[12px] leading-[17px]">
                Explore between more than 8.427 sightings
              </h3>
            </div>
            <div>
              <div className="mt-[20px] lg:mt-0 lg:w-[550px]">
                <FormInput name="name" label="Title of the sighting" />
              </div>
            </div>
            <div className="mt-[20px] lg:mt-0 lg:w-[300px] lg:ml-[20px]">
              <FormInput name="location" label="Coordinates of the sighting" />
            </div>
            <div className="relative w-full lg:w-[200px] lg:ml-auto mt-[20px] lg:mt-0">
              <div className="z-10 relative lg:w-[200px]">
                <FormInput name="photo" type="file" />
              </div>
              <div
                style={{
                  boxShadow: "0px 15px 30px 0px #DF9186",
                }}
                className="w-full w-full lg:w-[200px] rounded-[3.2px] bg-[#FFFFFF]
               text-[13px] leading-none h-[50px]
               font-ubuntu justify-center flex items-center
               border-[1px] border-current mb-[#DF9186] text-[#DF9186] absolute top-[0px]"
              >
                <PhotoSvg />
                <span className="ml-[10px] font-[500]">Add a Photo</span>
              </div>
            </div>
            <div className="mt-[20px] relative z-[20] lg:w-full [&_.adjustable]:h-[242px] lg:[&_.adjustable]:h-[250px]:h-[150px]">
              <TextareaComponent
                height={isDesktop ? "150px" : "242px"}
                name={"description"}
                label="Write a description…"
              />
            </div>
            <button
              type={"submit"}
              style={{ boxShadow: "0px 15px 20px 0px #EAA89F33" }}
              className="my-[28px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[100%] h-[50px]
             rounded-[2.3px] text-[14px] font-[500] text-[#FFFFFF]"
            >
              Create New Sighting
            </button>
          </form>
        </FormProvider>
      </section>
    </div>
  );
};

export default NewSighting;
