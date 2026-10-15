import { slip } from "../Types/Types";
import "../globals.css";
import PatternDividerDesktop from "/public/pattern-divider-desktop.svg";
import PatternDividerMobile from "/public/pattern-divider-mobile.svg";
import Dice from "/public/icon-dice.svg";
import Image from "next/image";

export function Advice({
  slip,
  getSlip,
}: {
  slip: slip | null;
  getSlip: () => void;
}) {
  return (
    <div className="relative m-4 flex max-w-max">
      <div className="flex max-w-xl flex-col items-center rounded-xl bg-blue-900 p-10 pb-12 text-center">
        <p className="mb-6 text-tiny tracking-[.35em] text-green-300">
          ADVICE #{slip?.id}
        </p>
        <p className="mb-6 text-xl text-blue-200 sm:text-2xl">
          "{slip?.advice}"
        </p>
        {/* Imagem para Desktop */}
        <Image
          src={PatternDividerDesktop}
          alt="Pattern divider on desktop screens"
          className="hidden w-full object-cover sm:block"
        />
        {/* Imagem para Mobile */}
        <Image
          src={PatternDividerMobile}
          alt="Pattern divider on mobile screens"
          className="block object-cover sm:hidden"
        />
      </div>
      <button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer rounded-4xl bg-green-300 p-5 transition delay-50 duration-350 ease-in-out hover:shadow-grn sm:p-4"
        onClick={() => getSlip()}
      >
        <Image src={Dice} alt="Dice" className="w-6 sm:w-4" />
      </button>
    </div>
  );
}
