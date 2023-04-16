import Image from 'next/image'
import { IdCardIcon, RocketIcon, MixIcon} from '@radix-ui/react-icons'
import SkillList from '@/components/skills';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-3/5 px-5 bg-white dark:bg-stone-950 md:w-1/2 md:h-3/4">
      <div className={"w-full h-12 mb-8 bg-white dark:bg-stone-950 2xl:h-24"}>
        <h1 className="text-5xl 2xl:text-8xl font-sac">ali kheirkhah</h1>
      </div>
      <div className="w-full h-fit bg-white dark:bg-stone-950 py-1 px-1 flex flex-col justify-start md:flex-row md:items-start">
        <div className="w-28 h-28 rounded-full mr-3 mb-8 md:mb-4 overflow-hidden flex justify-center items-center 2xl:w-64 2xl:h-64">
          <Image
            src={"/profilepic.jpeg"}
            alt="profile"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between mb-8 w-fit h-28 bg-white dark:bg-stone-950 px-1 2xl:w-fit 2xl:h-64">
          <div className="w-full h-1/3 bg-white dark:bg-stone-950 flex items-center">
            <MixIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">20</span> y.o
            </h1>
          </div>
          <div className="w-full h-1/3 bg-white dark:bg-stone-950 flex items-center">
            <RocketIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              {" "}
              <span className="font-popM">7</span> years of experience
            </h1>
          </div>
          <div className="w-full h-1/3 bg-white dark:bg-stone-950 flex items-center">
            <IdCardIcon className="text-black dark:text-white text-opacity-70" />
            <h1 className="text-sm font-popL ml-2 text-black 2xl:text-4xl  dark:text-white text-opacity-70">
              Currently at{" "}
              <span className="font-popM">Kings college London</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-white dark:bg-stone-950 py-1 px-1 flex flex-col">
        <h1 className="text-sm font-popL ml-2 mb-5 text-black 2xl:text-4xl  dark:text-white">
          Hey, I’m Ali. I’m a <span className="font-popM">backend</span> and{" "}
          <span className="font-popM">frontend</span> developer specialising in
          backend development using the latest programming languages.
        </h1>
        <h1 className="text-sm font-popM ml-2 mb-4 text-black 2xl:text-4xl dark:text-white">
          Skills.
        </h1>
        <SkillList/>

      </div>
    </div>
  );
}