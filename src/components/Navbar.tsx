import Image from "next/image";
import { useState } from "react";
import { Modal } from "./Modal";
import Hamburger from "/public/images/icon-hamburger.svg";
import Logo from "/public/images/logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" absolute flex w-full bg-transparent p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <Image src={Logo} alt="Logo" />
        <div className="md:hidden">
          <Image
            src={Hamburger}
            alt="Logo"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="#"
            className="text-xl font-semibold md:text-sm md:text-white"
          >
            About
          </a>
          <a
            href="#photograpy"
            className="text-xl font-semibold md:text-sm md:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="text-xl font-semibold md:text-sm md:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="rounded-full bg-yellow px-16 py-4 text-xl font-semibold text-gray-900 md:bg-white"
          >
            Contact
          </a>
        </div>
      </div>
      <Modal isOpen={isOpen}>
        <div className=" absolute inset-6 top-16 z-10 block h-[480px] w-[87%] bg-base-menu bg-no-repeat" onClick={toggleMenu}>
          <div className=" mt-14 flex flex-col items-center justify-center gap-6">
            <a href="#" className="text-xl font-semibold text-gray-500">
              About
            </a>
            <a
              href="#photograpy"
              className="text-xl font-semibold text-gray-500"
            >
              Services
            </a>
            <a href="#" className="text-xl font-semibold text-gray-500">
              Projects
            </a>
            <a
              href="#"
              className="rounded-full bg-yellow px-16 py-4 text-xl font-semibold text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </Modal>
      {/* {isOpen && (
        <div className=" absolute inset-6 top-16 z-10 block h-[480px] w-[87%] bg-base-menu bg-no-repeat">
          <div className=" mt-14 flex flex-col items-center justify-center gap-6">
            <a href="#" className="text-xl font-semibold text-gray-500">
              About
            </a>
            <a
              href="#photograpy"
              className="text-xl font-semibold text-gray-500"
            >
              Services
            </a>
            <a href="#" className="text-xl font-semibold text-gray-500">
              Projects
            </a>
            <a
              href="#"
              className="rounded-full bg-yellow px-16 py-4 text-xl font-semibold text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
}
