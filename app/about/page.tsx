import Link from 'next/link';
import React from 'react'

export default function about() {
  return (
    <div className="flex flex-col w-full h-fit px-5 md:h-fill md:mt-1">
      <div className={"w-full h-12 mb-2  2xl:h-24"}>
        <h1 className="text-5xl 2xl:text-8xl font-sac">about</h1>
      </div>
      <h1 className="text-base font-popM mt-4">Hey, I'm Ali...</h1>
      <p className="mb-5 font-popL">
        I have been programming since I was{" "}
        <span className="font-popM">13</span>. I started with{" "}
        <span className="font-popM">C++</span> then moved to{" "}
        <span className="font-popM">C# </span>
        and finally started programming in <span className="font-popM">C</span>.
        I used these programming languages for school's
        <span className="font-popM"> robotic</span> competitions. <br /> Me and
        my team went to <span className="font-popM">Germany Robocup2016</span>{" "}
        and <span className="font-popM">Japan Robocup2017</span> in which we
        gained different awards.
      </p>
      <h1 className="text-sm font-popL bg-neutral-800 w-fit h-fit rounded-lg py-2 px-4 mb-5">
        2016 - 2018
      </h1>
      <p className="mb-5 font-popL">
        Meanwhile I was part of a team in which we designed and developed an IOS
        game using <span className="font-popM"> Swift </span> and
        <span className="font-popM"> SpriteKit </span>. We published the game to
        the apple Appstore and it was live for
        <span className="font-popM"> 1 year </span>.
      </p>
      <h1 className="text-sm font-popL bg-neutral-800 w-fit h-fit rounded-lg py-2 px-4 mb-5">
        2017 - 2018
      </h1>

      <p className="mb-5 font-popL">
        In july of<span className="font-popM"> 2018 </span> I got a scholarship
        from
        <span className="font-popM"> Apple </span> to attend the
        <span className="font-popM"> WWDC18 developers confrence</span> the
        languages and frameworks I used for this challenge were{" "}
        <span className="font-popM"> Swift </span> ,
        <span className="font-popM"> UIKit </span> ,
        <span className="font-popM"> ARKit </span> and
        <span className="font-popM"> SpriteKit </span>.
      </p>
      <h1 className="text-sm font-popL bg-neutral-800 w-fit h-fit rounded-lg py-2 px-4 mb-5">
        2018
      </h1>
      <p className="mb-5 font-popL">
        In these past years I have been focused on{" "}
        <span className="font-popM"> backend </span> development and have been a{" "}
        <span className="font-popM"> co-founder </span> of a trading bot team
        called tradeEF. I optimized
        <span className="font-popM"> webhooks </span> and created different APIs
        for connection to different crypto exchanges such as
        <span className="font-popM"> Binance </span>,
        <span className="font-popM"> Coinex </span> and
        <span className="font-popM"> Houbi </span>.<br />
        We also used <span className="font-popM">AI </span> and{" "}
        <span className="font-popM"> Tensorflow </span>
        inorder to predict patterns in different charts to make the best
        descision on when to enter on a trade.
        <br />
        The stack that we used for this project was{" "}
        <span className="font-popM"> Node.js </span> and{" "}
        <span className="font-popM"> Python </span> specifically the{" "}
        <span className="font-popM"> Flask </span> framework for dealing with
        data and analysing them with{" "}
        <span className="font-popM"> Tensorflow </span>.
      </p>
      <h1 className="text-sm font-popL bg-neutral-800 w-fit h-fit rounded-lg py-2 px-4 mb-5">
        2019-2022
      </h1>

      <h1 className='font-popL'>Get to know more about me by visiting my 
      <a href='https://github.com/313devs' className='font-popM hover:bg-neutral-800 hover:rounded-lg hover:px-4 hover:py-2 hover:mx-2'> Github </a> or the <Link href='/projects' className='font-popM hover:bg-neutral-800 hover:rounded-lg hover:px-4 hover:py-2 hover:mx-2'> Projects </Link> page</h1>
    </div>
  );
}
