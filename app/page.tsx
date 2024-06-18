"use client";

import Image from "next/image";
import {
  IdCardIcon,
  RocketIcon,
  MixIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import SkillList from "@/components/skills";
import { motion } from "framer-motion";
import { Sacramento, Poppins } from "next/font/google";

const sacramento = Sacramento({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-sac",
  display: "swap",
});
const poppinsLight = Poppins({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pop-light",
});

const poppinsMedium = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pop-medium",
});

export default function Home() {
  return (
    <div className="flex flex-col px-5 md:w-5/6 h-fit md:h-full md:mt-1 md:ml-5">
      <div className={"w-full h-12 mb-2  2xl:h-24"}>
        <motion.h1
          initial={{
            y: -10,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 600,
          }}
          className="text-5xl 2xl:text-8xl font-sac"
        >
          ali kheirkhah
        </motion.h1>
      </div>
      <div className="flex flex-col justify-start w-full px-1 py-1 h-fit md:flex-row md:items-start">
        <motion.div
          initial={{
            opacity: 0.2,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            type: "tween",
          }}
          className="flex items-center justify-center mb-4 mr-3 overflow-hidden rounded-full w-28 h-28 md:mb-4 2xl:w-64 2xl:h-64"
        >
          <Image
            src={"/profilepic.jpg"}
            alt="profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="flex flex-col justify-between px-1 mb-2 w-fit h-28 2xl:w-fit 2xl:h-64">
          <div className="flex items-center w-full h-1/3">
            <MixIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="ml-2 text-sm text-black font-popL 2xl:text-4xl dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">21</span> y.o
            </h1>
          </div>
          <div className="flex items-center w-full h-1/3">
            <RocketIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="ml-2 text-sm text-black font-popL 2xl:text-4xl dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">3</span> years of experience
            </h1>
          </div>
          <div className="flex items-center w-full h-1/3">
            <IdCardIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="ml-2 text-sm text-black font-popL 2xl:text-4xl dark:text-white text-opacity-70">
              <span className="font-popM">City, University of London</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-1 py-1 h-fit">
        <h1 className="mb-5 ml-1 text-sm text-black font-popL 2xl:text-4xl dark:text-white">
          Hey, I’m Ali. I’m a <span className="font-popM">backend</span> and{" "}
          <span className="font-popM">frontend</span> developer specialising in
          backend development using the latest programming languages.
        </h1>
        <h1 className="mb-4 ml-1 text-sm text-black font-popM 2xl:text-4xl dark:text-white">
          Skills.
        </h1>
        <SkillList />
        <div className="flex flex-row justify-start w-full mt-5 h-fit">
          <a
            href="https://www.linkedin.com/in/ali110kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center h-10 px-4 py-6 text-lg border-2 rounded-lg w-fit hover:bg-neutral-100 hover:dark:bg-neutral-800 md:text-sm font-popL hover:dark:text-white border-neutral-100 dark:border-neutral-800">
              <LinkedInLogoIcon className="mr-2" />
              Linkedin
            </button>
          </a>
          <a
            href="https://github.com/313devs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center h-10 px-4 py-6 ml-4 text-lg border-2 rounded-lg w-fit hover:bg-neutral-100 hover:dark:bg-neutral-800 md:text-sm font-popL hover:dark:text-white border-neutral-100 dark:border-neutral-800">
              <GitHubLogoIcon className="mr-2" />
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
