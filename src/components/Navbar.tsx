import Image from "next/image";
import { useState } from "react";
import Hamburger from "/public/images/icon-hamburger.svg";
import Logo from "/public/images/logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" w-full bg-transparent absolute p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <Image src={Logo} alt="Logo" />
        <Image
          src={Hamburger}
          alt="Logo"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className=" h-[480px] bg-base-menu bg-no-repeat absolute block w-[87%] inset-6 top-16 z-10">
          <div className=" flex flex-col items-center justify-center gap-6 mt-14">
            <a href="#" className="text-xl font-semibold text-gray-500">
              About
            </a>
            <a href="#" className="text-xl font-semibold text-gray-500">
              Services
            </a>
            <a href="#" className="text-xl font-semibold text-gray-500">
              Projects
            </a>
            <a
              href="#"
              className="rounded-full bg-yellow-400 px-16 py-4 text-xl font-semibold text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
