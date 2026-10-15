import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import "../globals.css";
import Dice from "/public/icon-dice.svg";
import PatternDividerDesktop from "/public/pattern-divider-desktop.svg";
import PatternDividerMobile from "/public/pattern-divider-mobile.svg";

export function Skeleton() {
  return (
    <div className="relative m-4 flex max-w-max animate-pulse">
      <div className="flex max-w-xl flex-col items-center rounded-xl bg-blue-900 p-10 pb-12 text-center">
        <Typography
          as="div"
          variant="small"
          className="mb-8 h-3 w-20 rounded-full bg-green-300"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-5 w-full rounded-full bg-blue-600"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="h1"
          className="mb-8 h-5 w-2/3 rounded-full bg-blue-600"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &nbsp;
        </Typography>
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-4xl bg-blue-600 p-5 sm:p-4"
        disabled
      >
        <Image src={Dice} alt="Dice" className="w-6 sm:w-4" />
      </button>
    </div>
  );
}
