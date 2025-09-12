"use client";
import React, { useEffect } from "react";
import Logo from "../Logo";
import { X } from "lucide-react";
const Success = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 1000);
    }, [isOpen]);
  return (
    <div
      className={`fixed left-0 top-0 flex z-50 bg-black/50 h-screen w-screen flex-col items-center justify-center ${isOpen ? "block" : "hidden"}`}
    >
      <div className="rounded-lg bg-white py-5 mx-5">
        <div className="pl-5 md:pl-0 flex items-center justify-between w-full pr-5">
          <Logo width={30} height={30} small={true} />
          <X size={20} onClick={() => onClose()} />
        </div>
        <div className="flex flex-col items-center justify-center p-5 md:p-10 gap-y-6">
          <h1 className="text-xl md:text-2xl font-bold text-center">Form submitted successfully.</h1>
          <p className="text-sm text-gray-500 text-center">
            Your form has been submitted successfully. A team member will
            contact you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
