import { useEffect } from "react";

import { LocationSvg } from "../assets/icons/LocationSvg";
import { PhotoSvg } from "../assets/icons/PhotoSvg";
import FormInput from "../components/FormInput";
import TextareaComponent from "../components/TextareaComponent";
import { useMutation } from "@tanstack/react-query";
import { object, string, TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { useParams } from "react-router-dom";
import { addNewSightingFn } from "../api/appApi";

export type INewSightingInputs = TypeOf<typeof registerSchema>;

interface INewSigthing {
  flowerId: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  photo: string(),
  location: string().min(1, "Last name is required").max(100),
  description: string().min(1, "Last name is required").max(100),
});

const NewSighting = () => {
  const { flowerId } = useParams();

  const methods = useForm<any>({
    resolver: zodResolver(registerSchema),
  });

  const {
    mutate: addSighting,
    data,
    isSuccess,
  } = useMutation((sightingData: any) => addNewSightingFn(sightingData), {
    onMutate(variables) {},
    onSuccess(data) {},
    onError(error: any) {
      return;
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            backgroundImage: `linear-gradient(180deg, rgba(249, 249, 249, 0.0001) 0%, #F9F9F9 100%), url(../../src/assets/images/map_sm.png)`,
            backgroundSize: "190% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 0% left 50%",
          }}
          className="h-[95.23vw] flex items-start justify-end text-[#334144] px-[40px] md:pl-[30px]"
        >
          <div className="md:flex md:items-center">
            <div className="absolute left-[28.57%] top-[51.42vw]">
              <LocationSvg height="40" width="30" />
            </div>
          </div>
          <div className="flex pt-[22px]">
            <button
              onClick={() => {
                return;
              }}
              className="bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E] w-[200px] h-[50px] rounded-[2.3px]
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
        className="mt-[-180px] px-[16px] flex flex-wrap"
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="pt-[35px] w-full px-[24px] bg-[#FFFFFF]"
          >
            <div className="text-[#949EA0] [&>*]:text-center">
              <h2 className="text-[24] leading-[40px]">Add New Sighting</h2>
              <h3 className="my-[13px] text-[12px] leading-[17px]">
                Explore between more than 8.427 sightings
              </h3>
            </div>
            <div className="mt-[20px]">
              <FormInput name="name" label="Title of the sighting" />
            </div>
            <div className="mt-[20px]">
              <FormInput name="location" label="Coordinates of the sighting" />
            </div>
            <div className="mt-[20px] z-10 relative">
              <FormInput name="photo" type="file" />
            </div>
            <div
              style={{
                boxShadow: "0px 15px 30px 0px #DF9186",
              }}
              className="w-full rounded-[3.2px] bg-[#FFFFFF]
               text-[13px] leading-none h-[50px]
               mt-[-50px] relative font-ubuntu justify-center flex items-center
               border-[1px] border-current [#DF9186] text-[#DF9186]"
            >
              <PhotoSvg />
              <span className="ml-[10px] font-[500]">Add a Photo</span>
            </div>
            <div className="mt-[20px] relative z-[20]">
              <TextareaComponent
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
