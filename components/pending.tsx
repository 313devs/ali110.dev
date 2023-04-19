"use client"

import React from 'react'
import {GitHubLogoIcon,LinkedInLogoIcon,LapTimerIcon} from '@radix-ui/react-icons'
import { motion } from 'framer-motion';

export default function Pending() {
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
          y:100,
        }}
        animate={{
          opacity: 1,
          y:0,
        }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 300,
        }}
        className="flex flex-col w-fit h-fit bg-neutral-200 dark:bg-neutral-700 justify-center items-center py-5 px-7 rounded-lg"
      >
        <h1 className="font-popL text-sm">
          Oops😬, looks like I am still working on this page
        </h1>
        <div className="w-full h-fit flex flex-row justify-center mt-5">
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
      </motion.div>
    </div>
  )
}
