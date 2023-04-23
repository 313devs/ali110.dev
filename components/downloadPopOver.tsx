"use client"

import React from 'react'
import Image from 'next/image'
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon, DownloadIcon } from '@radix-ui/react-icons';

export default function DownloadButton() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex flex-row items-center justify-center bg-neutral-100 dark:bg-neutral-800 w-fit h-fit px-4 py-2 rounded-lg text-sm font-popL active:dark:bg-neutral-700 active:bg-neutral-200">
          Resume
          <DownloadIcon className="ml-2" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-lg p-5 w-60 bg-neutral-200 dark:bg-neutral-800 ml-5 flex flex-col justify-center items-center"
          sideOffset={5}
        >
          <div className="w-fit h-fit rounded-lg mb-2 overflow-hidden flex justify-center items-center 2xl:w-64 2xl:h-64">
            <Image
              src={"/ResumeThumbnail.png"}
              alt="Thumbnail"
              width={1000}
              height={1000}
              className="w-full h-full object-cover opacity-25"
            />
            <h1 className="text-center text-xl font-popL absolute">
              Resume.pdf
            </h1>
          </div>
          <a
            className="flex flex-row items-center justify-center w-full"
            href="/Resume.pdf"
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-10 w-full flex justify-center items-center bg-neutral-100 dark:bg-neutral-700 text-lg font-popL rounded-lg active:dark:bg-neutral-800 active:bg-neutral-200">
              Download
              <DownloadIcon className="ml-2" />
            </button>
          </a>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
