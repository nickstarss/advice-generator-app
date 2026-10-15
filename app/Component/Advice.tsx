import { slip } from "../Types/Types";
import "../globals.css";
import PatternDivider from "/public/pattern-divider-desktop.svg";
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
    <div className="relative flex max-w-max">
      <div className="flex max-w-xl flex-col items-center rounded-xl bg-blue-900 p-10 pb-12 text-center">
        <p className="mb-3 text-tiny tracking-[.35em] text-green-300">
          ADVICE #{slip?.id}
        </p>
        <p className="mb-6 text-2xl text-blue-200">"{slip?.advice}"</p>
        <Image src={PatternDivider} alt="Pattern divider" />
      </div>
      <button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer rounded-4xl bg-green-300 p-3 transition delay-50 duration-350 ease-in-out hover:shadow-grn"
        onClick={() => getSlip()}
      >
        <Image src={Dice} alt="Dice" className="w-4" />
      </button>
    </div>
  );
}
