import { FC } from "react";

interface IMessage {
  text: string;
  children?: React.ReactNode;
}

const Message: FC<IMessage> = ({ text, children = null }) => {
  return (
    <div className="px-[30px] py-[50px] flex flex-wrap justify-center items-center w-[full] h-[100%]">
      <p>{text}</p>
      {children && children}
    </div>
  );
};

export default Message;
