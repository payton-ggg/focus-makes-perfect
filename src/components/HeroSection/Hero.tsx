import * as React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-36 bg-white max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1000px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full text-black max-md:max-w-full">
                <div className="overflow-hidden gap-2 self-start px-3 py-1 text-xs leading-loose bg-white rounded-[999px] shadow-[0px_2px_3px_rgba(0,0,0,0.4)]">
                  Vario Component System
                </div>
                <div className="mt-3 text-[50px] font-semibold leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                  Save hours and <br />
                  build better websites.
                </div>
                <div className="mt-3 text-sm leading-6">
                  Lorem ipsum dolor sit amet,{" "}
                  <span className="font-medium text-black">
                    consectetur adipiscing elit.
                  </span>{" "}
                  Vestibulum sed mauris a ex posuere luctus sit amet ac mi.
                </div>
              </div>
              <div className="flex overflow-hidden gap-2 justify-center items-center self-start py-2 pr-3 pl-2.5 mt-11 text-sm font-medium leading-6 text-white rounded-lg border border-white border-solid shadow-sm bg-zinc-900 max-md:mt-10">
                <div className="self-stretch my-auto flex">
                  <Image
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acafa26269f5e3f6090242024c59b98618491c4d79d7c2e88fd94c747ec52ba8?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square mr-2"
                    width={20}
                    height={20}
                  />
                  Get Started For Free
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-2xl font-medium tracking-tighter leading-none text-neutral-700 max-md:mt-10">
              <div className="flex gap-1 whitespace-nowrap">
                <div className="w-[140px]"></div>
                <div className="flex overflow-hidden flex-col grow shrink-0 justify-center px-16 py-8 rounded-xl basis-0 bg-neutral-100 w-fit max-md:px-5">
                  <div className="flex gap-2.5 items-center">
                    <Image
                      alt=""
                      src="/notion.png"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[106px]"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                <div className="flex overflow-hidden flex-col grow shrink-0 justify-center items-start px-16 py-8 rounded-xl basis-0 bg-neutral-100 w-fit max-md:px-5">
                  <div className="flex gap-2.5 items-center">
                    <Image
                      alt=""
                      src="/.png"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[106px]"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <Image
                  alt=""
                  src="/notion.png"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[106px]"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
