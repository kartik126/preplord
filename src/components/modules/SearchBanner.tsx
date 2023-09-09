import React from "react";
import illustration from '../../../public/search banner/Students-rafiki.svg'
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

function SearchBanner() {
  return (
    <div className="flex items-center justify-between bg-[#205383] h-[400px] px-10 text-white">
      <div className="flex flex-col w-1/2">
        <h1 className="text-3xl font-[600]">
          YOUR PATH TO <br/> ACADEMIC EXCELLENCE STARTS HERE..
        </h1>
        <div className="pt-5 pb-5 px-5 bg-[#366a9a] rounded-[20px] mt-5 my-2">
          <p className="pb-2">Search Exam</p>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search Exams..."
              className="w-full py-4 pl-10 pr-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
           <BookOpenIcon className="text-gray-400 h-5"/>

            </div>
            <div className="absolute inset-y-0 right-6 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="text-gray-400 h-5"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
      <Image src={illustration} width={450} alt="" className="animate-jump"/>
      </div>
    </div>
  );
}

export default SearchBanner;
