import React, { ReactElement } from "react";

export default function DialogComponent({
  isOpen,
  children,
  closeHandler,
}: {
  isOpen: boolean;
  children: ReactElement;
  closeHandler: () => void;
}) {
  return (
    <>
      {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto 
          fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              className="absolute w-[100%] h-[100%] z-40 close-dialog"
              onClick={(e) => {
                closeHandler();
              }}
            ></div>
            <div
              className="fixed md:relative bottom-[0] h-[calc(100vh_-_80px)] md:h-[calc(100vh)] 
            w-auto mx-auto min-w-full md:min-h-[0] md:min-w-[unset] z-50 md:flex md:items-center md:mt-[71px]
            bg-[#FFFFFF] md:bg-[none]"
            >
              {children}
            </div>
          </div>
          <div className="opacity-25 fixed z-45 inset-0 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
