import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpUserFn } from "../api/authApi";
import FormInput from "./FormInput";
import { getDate } from "../shared/helpers/timeHelpers";
import { toast } from "react-toastify";
import Message from "./Message";

const registerSchema = object({
  firstName: string().min(1, "Full name is required").max(100),
  lastName: string().min(1, "Last name is required").max(100),
  dateOfBirth: string().min(1, "Date of birth is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type RegisterInput = TypeOf<typeof registerSchema>;

interface ISignUp {
  successHandler: (data?: any) => void;
}

const SignUp = ({ successHandler }: ISignUp) => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser } = useMutation(
    (userData: RegisterInput) => signUpUserFn(userData),
    {
      onSuccess() {
        setSuccessMessage(true);
      },
      onError(error: any) {
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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    registerUser(values);
  };

  return (
    <section
      className="bg-[#FFFFFF] [&_button]:rounded-[3.2px] justify-center
       max-h-[420px] font-ubuntu rounded-[3.2px] shadow-[0px 15px 30px 0px #0000000D] px-[20px]"
    >
      {successMessage ? (
        <Message
          text={
            "Congratulations! You have successfully signed up for FlowrSpot!"
          }
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
        <div className="max-w-[440px] m-[5px] text-[#334144]">
          <h2
            className="m-[30px] text-center text-[20px] leading-none block h-[20px] font-[500] font-ubuntu
         text-[#334144]"
          >
            Create an Account
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="flex flex-wrap"
            >
              <div className="mr-[5px] w-[calc(50%_-_5px)]">
                <FormInput label="First Name" name="firstName" />
              </div>
              <div className="ml-[5px] w-[calc(50%_-_5px)]">
                <FormInput label="Last Name" name="lastName" />
              </div>
              <div className="w-[100%] mt-[10px] relative">
                <div className="relative z-[10]">
                  <FormInput
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                  />
                </div>
                <div
                  className="z-[9] absolute top-0 w-full rounded-[3.2px] bg-[#DFE5EA] text-[13px] leading-none h-[50px]
                    font-ubuntu text-[13px] pt-[12px] pl-[15px] flex items-center pt-[10px]
            "
                >
                  {getDate(methods.watch().dateOfBirth)}
                </div>
              </div>
              <div className="w-[100%] mt-[10px]">
                <FormInput label="Email Adress" name="email" />
              </div>
              <div className="w-[100%] mt-[10px]">
                <FormInput label="Password" name="password" type={"password"} />
              </div>
              <button
                className="w-full h-[50px] mt-[10px] mb-[30px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E]
               font-[500] text-[#FFFFFF]"
                type={"submit"}
              >
                Create your Account
              </button>
            </form>
          </FormProvider>
        </div>
      )}
    </section>
  );
};

export default SignUp;
