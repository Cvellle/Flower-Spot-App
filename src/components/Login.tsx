import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { useMutation, useQuery } from "@tanstack/react-query";
import useStore from "../store";
import { getMeFn, loginUserFn } from "../api/authApi";
import FormInput from "./FormInput";
import { saveTokens } from "../shared/helpers/authHelpers";
import { useState } from "react";
import Message from "./Message";
import { toast } from "react-toastify";

const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;

interface ILogInProps {
  successHandler: () => void;
}

const LogIn = ({ successHandler }: ILogInProps) => {
  const store = useStore();
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const { data } = useQuery(["user"], async () => await getMeFn(), {
    staleTime: 9000000,
    cacheTime: 9000000,
    onError(error) {
      toast.error((error as any).response.data.message, {
        position: "top-right",
      });
    },
  });

  const {
    mutate: loginUser,
    // data,
    isSuccess,
  } = useMutation((userData: LoginInput) => loginUserFn(userData), {
    onSuccess(data) {
      saveTokens(data);
    },
    onError(error: any) {
      toast.error((error as any).response.data.message, {
        position: "top-right",
      });
    },
  });

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values);
  };

  return (
    <section
      className="bg-[#FFFFFF] [&_button]:rounded-[3.2px] grid
       place-items-start justify-center h-[290px] w-[420px]
       font-ubuntu rounded-[3.2px] shadow-[0px 15px 30px 0px #0000000D]"
    >
      {successMessage ? (
        <Message
          text={"Congratulations! You have successfully logged into FlowrSpot!"}
        >
          <button
            className="text-[#FFFFFF] w-[100px] h-[50px] mt-[10px] mt-[50px] bg-gradient-to-r from-[#ECBCB3]
               to-[#EAA79E] font-[500] mx-auto"
            onClick={() => {
              successHandler();
            }}
          >
            Ok
          </button>
        </Message>
      ) : (
        <div className="w-[380px] text-[#334144]">
          <h2
            className="m-[30px] text-center text-[20px] leading-none block h-[20px] font-[500] font-ubuntu
         text-[#334144]"
          >
            Welcome Back
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="flex flex-wrap [&_input]:mb-[10px]"
            >
              <div className="w-[380px]">
                <FormInput label="Email" name="email" />
              </div>
              <div className="w-[380px]">
                <FormInput label="Email" name="password" type={"password"} />
              </div>
              <button
                className="w-full h-[50px] mt-[10px] mb-[30px] bg-gradient-to-r from-[#ECBCB3]
               to-[#EAA79E] font-[500] text-[#FFFFFF]"
                type={"submit"}
              >
                Login to your Account
              </button>
            </form>
          </FormProvider>
        </div>
      )}
    </section>
  );
};

export default LogIn;
