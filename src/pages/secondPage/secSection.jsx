import React from "react";
import { IconArrowRight } from '@tabler/icons-react';

export default function SecondSection() {
  return (
    <>
      <div className="w-full pt-[50px] flex bg-[#1d0e2f] relative items-start flex-wrap gap-10">
        {/* <div
          class="circleblur bg-[#341c55] w-52 h-52 top-24 right-0 blur-3xl fixed animate-pulse rounded-full"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          class="circleblur bg-[#341c55] w-60 h-60 right-[40%] bottom-16 blur-3xl fixed animate-pulse rounded-full"
          style={{ animationDuration: "10s" }}
        ></div> */}

        {/* internal style  */}
        <style>
          {`
          .gradient-text {
            background: linear-gradient(to right, #8c5cf4, #f1e7fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
         .hover-gradiant:hover {
            background: linear-gradient(to right, #8452ea, #2b1557);
         }
        .hover-gradiant:hover .count{
            color: white;
        }
        `}
        </style>

        {/* work counts  */}
        <div className="w-full flex text-white justify-between h-auto px-20 xl:px-36">
            <div className="flex items-center gap-4">
                <h1 className="font-bold text-6xl">02</h1>
                <span className="text-left">Year of <br /> Experiance</span>
            </div>
            <div className="flex items-center gap-4">
                <h1 className="font-bold text-6xl">30+</h1>
                <span className="text-left">Project <br /> Completed</span>
            </div>
            <div className="flex items-center gap-4">
                <h1 className="font-bold text-6xl">100+</h1>
                <span className="text-left">Happy <br /> Clients</span>
            </div>
            <div className="flex items-center gap-4">
                <h1 className="font-bold text-6xl">02</h1>
                <span className="text-left">Year of <br /> Experiance</span>
            </div>
        </div>
        {/* quality services  */}
        <div className="w-full gap-10 flex flex-wrap">
            <div className="Header w-full flex justify-center flex-col items-center gap-3">
                <h1 className="gradient-text text-5xl font-semibold">My Quality Services</h1>
                <p className="w-[40%] text-blue-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias alias, nostrum maxime repudiandae rem beatae veritatis</p>
            </div>
            <div className="table text-white w-full px-40">
                <div className="tableRow flex justify-center hover-gradiant p-5 rounded-lg">
                    <div className="count text-[#462d7d] font-semibold text-3xl">01</div>
                    <div className="w-[40%] text-3xl">Web Design</div>
                    <div className="w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, distinctio doloribus minima deserunt debitis</div>
                    <div><IconArrowRight stroke={2} /></div>
                </div>
                <div className="tableRow flex justify-center hover-gradiant p-5 rounded-lg">
                    <div className="count text-[#462d7d] font-semibold text-3xl">02</div>
                    <div className="w-[40%] text-3xl">Front-end</div>
                    <div className="w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, distinctio doloribus minima deserunt debitis</div>
                    <div><IconArrowRight stroke={2} /></div>
                </div>
                <div className="tableRow flex justify-center hover-gradiant p-5 rounded-lg">
                    <div className="count text-[#462d7d] font-semibold text-3xl">03</div>
                    <div className="w-[40%] text-3xl">Back-end</div>
                    <div className="w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, distinctio doloribus minima deserunt debitis</div>
                    <div><IconArrowRight stroke={2} /></div>
                </div>
                <div className="tableRow flex justify-center hover-gradiant p-5 rounded-lg">
                    <div className="count text-[#462d7d] font-semibold text-3xl">04</div>
                    <div className="w-[40%] text-3xl">App Develop</div>
                    <div className="w-[40%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, distinctio doloribus minima deserunt debitis</div>
                    <div><IconArrowRight stroke={2} /></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
