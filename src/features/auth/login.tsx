import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import useStore from "../../store";
import { getMeFn, loginUserFn } from "../../api/authApi";
import FormInput from "../../components/FormInput";
import { saveTokens } from "../../shared/helpers/authHelpers";

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

const LogIn = () => {
  const store = useStore();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const {
    mutate: loginUser,
    data,
    isSuccess,
  } = useMutation((userData: LoginInput) => loginUserFn(userData), {
    onMutate(variables) {
      return;
      // store.setRequestLoading(true);
    },
    onSuccess(data) {
      saveTokens(data);
      let userResponse = async () => {
        let res = await getMeFn();

        if (res) {
          store.setAuthUser(res);
          return res;
        }
      };
      // let a = userResponse();
      // let res = async () => await userResponse();
      // console.log(123, res);
      // userResponse && alert(JSON.stringify(userResponse));
      userResponse && store.setAuthUser(userResponse());
      return;
      // store.setRequestLoading(false);
      // toast.success(data?.message);
    },
    onError(error: any) {
      return;
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
               to-[#EAA79E] font-[500]"
              type={"submit"}
            >
              Login to your Account
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default LogIn;
// const { data, isLoading } = useQuery(["getMe"], getMeFn, {
//   // select(data) {
//   //   return data.data.user;
//   // },
//   onSuccess(data) {
//     store.setAuthUser(data);
//     alert(data);
//     // store.setRequestLoading(false);
//   },
//   onError(error) {
//     // store.setRequestLoading(false);
//     // if (Array.isArray((error as any).response.data.error)) {
//     //   (error as any).response.data.error.forEach((el: any) =>
//     //     toast.error(el.message, {
//     //       position: "top-right",
//     //     })
//     //   );
//     // } else {
//     //   toast.error((error as any).response.data.message, {
//     //     position: "top-right",
//     //   });
//     // }
//   },
// });
