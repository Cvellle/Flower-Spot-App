import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

import { useMutation } from "@tanstack/react-query";
import useStore from "../../store";
import { signUpUserFn } from "../../api/authApi";
import FormInput from "../../components/FormInput";
import { getDate } from "../../shared/helpers/timeHelpers";

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
  sucessHandler: (data?: any) => void;
}

const SignUp = ({ sucessHandler }: ISignUp) => {
  const store = useStore();

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    mutate: registerUser,
    data,
    isSuccess,
  } = useMutation((userData: RegisterInput) => signUpUserFn(userData), {
    onMutate(variables) {
      return;
      // store.setRequestLoading(true);
    },
    onSuccess(data) {
      sucessHandler();
      // store.setRequestLoading(false);
      // toast.success(data?.message);
    },
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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    registerUser(values);
  };

  return (
    <section
      className="bg-[#FFFFFF] [&_button]:rounded-[3.2px] grid place-items-start justify-center h-[410px] w-[font-family: 'Ubuntu, sans-serif';]
     font-ubuntu rounded-[3.2px] shadow-[0px 15px 30px 0px #0000000D]"
    >
      <div className="w-[380px] text-[#334144]">
        <h2
          className="m-[30px] text-center text-[20px] leading-none block h-[20px] font-[500] font-ubuntu
         text-[#334144]"
        >
          Create an Account
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-wrap [&_input]:mb-[10px]"
          >
            <div className="mr-[5px] w-[185px]">
              <FormInput label="Full Name" name="firstName" />
            </div>
            <div className="ml-[5px] w-[185px]">
              <FormInput label="Last Name" name="lastName" />
            </div>
            <div className="w-[380px]">
              <FormInput label="Email" name="email" />
            </div>
            <div className="w-[380px] z-10 relative">
              <FormInput label="Date of Birth" name="dateOfBirth" type="date" />
            </div>
            <div
              className="w-full rounded-[3.2px] bg-[#DFE5EA] text-[13px] leading-none h-[50px]
               mt-[-60px] relative relative font-ubuntu
               text-[13px] pt-[11px] pl-[15px] flex items-center pt-[10px]
            "
            >
              {getDate(methods.watch().dateOfBirth)}
            </div>
            <div className="w-[380px]">
              <FormInput label="Email" name="password" type={"password"} />
            </div>
            <button
              className="w-full h-[50px] mt-[10px] mb-[30px] bg-gradient-to-r from-[#ECBCB3] to-[#EAA79E]
               font-[500] text-[#FFFFFF]"
              type={"submit"}
            >
              Create Account
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SignUp;
