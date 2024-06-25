import { FC } from "react";

interface IMessage {
  text: string;
  children?: React.ReactNode;
}

const Message: FC<IMessage> = ({ text, children = null }) => {
  return (
    <div className="flex flex-wrap px-[30px] py-[50px] flex flex-wrap justify-center items-center w-[full] h-[100%]">
      <p className="w-full flex justify-center ">{text}</p>
      <div className="w-full flex justify-center">{children && children}</div>
    </div>
  );
};

export default Message;
