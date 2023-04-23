"use client"

import Image from 'next/image'
import { IdCardIcon, RocketIcon, MixIcon, LinkedInLogoIcon, GitHubLogoIcon} from '@radix-ui/react-icons'
import SkillList from '@/components/skills';
import { motion } from 'framer-motion';
import { Sacramento, Poppins} from 'next/font/google'

const sacramento = Sacramento({ 
  weight: '400', 
  style: 'normal',
  subsets : ["latin"],
  variable:"--font-sac",
  display: "swap"
})
const poppinsLight = Poppins({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pop-light",
})

const poppinsMedium = Poppins({
weight: '500',
style: 'normal',
subsets : ["latin"],
variable:"--font-pop-medium"
})


export default function Home() {


  return (
    <div className="flex flex-col md:w-5/6 h-fit px-5 md:h-full md:mt-1 md:ml-5">
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
      <div className="w-full h-fit  py-1 px-1 flex flex-col justify-start md:flex-row md:items-start">
        <motion.div 
        initial={{
          opacity: 0.2
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.6,
          type: "tween",
        }}
        className="w-28 h-28 rounded-full mr-3 mb-4 md:mb-4 overflow-hidden flex justify-center items-center 2xl:w-64 2xl:h-64">
          <Image
            src={"/profilepic.jpg"}
            alt="profile"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex flex-col justify-between mb-2 w-fit h-28 px-1 2xl:w-fit 2xl:h-64">
          <div className="w-full h-1/3 flex items-center">
            <MixIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">20</span> y.o
            </h1>
          </div>
          <div className="w-full h-1/3 flex items-center">
            <RocketIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">7</span> years of experience
            </h1>
          </div>
          <div className="w-full h-1/3  flex items-center">
            <IdCardIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              Currently at{" "}
              <span className="font-popM">King College London</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-fit  py-1 px-1 flex flex-col">
        <h1 className="text-sm font-popL ml-1 mb-5 text-black 2xl:text-4xl  dark:text-white">
          Hey, I’m Ali. I’m a <span className="font-popM">backend</span> and{" "}
          <span className="font-popM">frontend</span> developer specialising in
          backend development using the latest programming languages.
        </h1>
        <h1 className="text-sm font-popM ml-1 mb-4 text-black 2xl:text-4xl dark:text-white">
          Skills.
        </h1>
        <SkillList />
        <div className="w-full h-fit flex flex-row justify-start mt-5">
          <a
            href="https://www.linkedin.com/in/ali110kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-lg h-10 w-fit px-4 py-6 hover:bg-neutral-100 hover:dark:bg-neutral-800 flex items-center justify-center md:text-sm text-lg font-popL hover:dark:text-white border-2  border-neutral-100 dark:border-neutral-800">
              <LinkedInLogoIcon className="mr-2" />
              Linkedin
            </button>
          </a>
          <a
            href="https://github.com/313devs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-lg h-10 w-fit px-4 py-6 ml-4 hover:bg-neutral-100 hover:dark:bg-neutral-800 flex items-center justify-center md:text-sm text-lg font-popL hover:dark:text-white border-2 border-neutral-100 dark:border-neutral-800">
              <GitHubLogoIcon className="mr-2" />
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}