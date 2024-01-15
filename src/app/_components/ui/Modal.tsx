"use client";
import React, { createContext, useState } from "react";
import { MdSettings } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
interface modalContext {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
export const modalContext = createContext<modalContext>({});

interface modalWrapperProps {
  variant?: string;
  auto: boolean;
  children: React.ReactNode;
  value?: any;
  component?: any;
  title?: string;
  size?: string;
  card?: any;
  isOpen?:boolean
  setIsOpen?:(value:boolean) => void
}

const Modal: React.FC<modalWrapperProps> = ({
  variant,
  value,
  size = "sm",
  title,
  children,
  auto,
  isOpen = false,
  setIsOpen,
}) => {
  const onOpen = () => setIsOpen?.(true);
  const onClose = () => setIsOpen?.(false);
  const [open, setOpen] = useState (isOpen)
  const sizesMap = new Map();

  sizesMap.set("sm", {w:"w-[350px]", h:'auto', maxH:'[650px]'});
  sizesMap.set("md", {w:"w-[450px]", h:'auto', maxH:'[650px]'});
  sizesMap.set("lg", {w:"w-[550px]", h:'auto', maxH:'[650px]'});
  sizesMap.set("xl", {w:"w-[650px]", h:'auto', maxH:'[70vh]'});
  sizesMap.set("full", {w:"w-[100vw]", h:'min-[100vh]', maxH:'[100vh]'});


  const openModal = ()=> {
      setOpen?.(true)
  }
  const closeModal = () => {
      setOpen?.(false)
  }
  return (
    <>
      {auto ? (
        ''
      ) : (
        <button className={`${variant}`} onClick={openModal}>
          {value}
        </button>
      )}
      <div
        className={`${
          open ? "block" : "hidden"
        } fixed left-0 top-0 z-30 flex h-[100vh] w-[100vw] items-center justify-center`}
      >
        <div
          className="left-0 top-0 h-[100vh] w-[100vw] z-30  bg-black/75 "
          onClick={closeModal}
        ></div>
        <div className="fixed z-50 flex h-full w-full items-center justify-center">
          <div
            className={` fixed z-50 ${sizesMap.get (size).w} ${size === 'full' ? 'min-h-[100vh]': ''}   overflow-y-auto rounded-md dark:bg-navy bg-white px-6 py-3`}
          >
            <div className="flex w-full items-center justify-end py-4">
              <RxCross1
                className="text-mediumGray hover:scale-105"
                onClick={closeModal}
              />
            </div>
            <div className="flex h-auto w-full flex-col">
              <modalContext.Provider value={{ onClose }}>
                {children}
              </modalContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface popOverProps {
  children:React.ReactNode
  visible:boolean
}

const Popover:React.FC<popOverProps> = ({children, visible}) => {
  
  return <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/20 ${visible ? 'flex' : 'hidden'} justify-center items-center`}>
    <div className='w-[230px] rounded-md h-[260px] flex justify-center items-center z-50 bg-white dark:bg-navy'>
      {children}
    </div>
  </div>
}

export default Modal;
export {Popover}