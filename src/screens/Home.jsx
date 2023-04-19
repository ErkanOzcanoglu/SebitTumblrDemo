import React from "react";
import Data from "../../data.json";
import Navbar from "../components/Navbar";
import QuotePost from "../components/QuotePost";
import ImagePost from "../components/ImagePost";
import LinkPost from "../components/LinkPost";
import ConversationPost from "../components/ConversationPost";
import AudioPost from "../components/AudioPost";
import ExampleRegularPost from "../components/ExampleRegularPost";
import RegularPost from "../components/RegularPost";

const Home = () => {
  const data = Data[0].posts[2];
  const day = data.date.split(",")[0];
  const number = data.date.split(" ")[1];
  const mounth = data.date.split(" ")[2];
  const data1 = Data[0].posts[4];
  const day1 = data1.date.split(",")[0];
  const number1 = data1.date.split(" ")[1];
  const mounth1 = data1.date.split(" ")[2];
  const data2 = Data[0].posts[6];
  const day2 = data2.date.split(",")[0];
  const number2 = data2.date.split(" ")[1];
  const mounth2 = data2.date.split(" ")[2];

  return (
    <div className="w-full bg-slate-900 flex justify-center flex-col items-center h-full min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-[80vw] md:ml-5 flex flex-col items-center">
        <div className="mt-20 flex w-full text-start border-b rounded-l-2xl border-cyan-500">
          <div className="bg-cyan-400 flex justify-center items-center text-white px-2 rounded-2xl ">
            <p className="text-5xl flex mb-1">{number}</p>
            <div className="flex flex-col items-center justify-evenly">
              <p className="text-lg font-bold ml-1">{day}</p>
              <p className="text-xl font-bold ml-1">{mounth}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 grid-cols-1 w-[75vw] mt-5">
          <div className="md:col-span-2">
            <QuotePost />
          </div>
          <LinkPost />
          <ConversationPost />
          <div className="md:col-span-2 md:col-end-0 flex w-full justify-center">
            <ImagePost />
          </div>
        </div>
      </div>
      <div className="w-[80vw] flex flex-col items-center">
        <div className="mt-20 flex w-full text-start border-b rounded-l-2xl border-green-500">
          <div className="bg-green-500 flex justify-center items-center text-white px-2 rounded-2xl ">
            <p className="text-5xl flex mb-1">{number1}</p>
            <div className="flex flex-col items-center justify-evenly">
              <p className="text-lg font-bold ml-1">{day1}</p>
              <p className="text-xl font-bold ml-1">{mounth1}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 w-[75vw] mt-5">
          <AudioPost />
          <ExampleRegularPost />
        </div>
      </div>
      <div className="w-[80vw] pb-10 flex flex-col items-center">
        <div className="mt-20 flex w-full text-start border-b rounded-l-2xl border-cyan-500">
          <div className="bg-cyan-400 flex justify-center items-center text-white px-2 rounded-2xl ">
            <p className="text-5xl flex mb-1">{number2}</p>
            <div className="flex flex-col items-center justify-evenly">
              <p className="text-lg font-bold ml-1">{day2}</p>
              <p className="text-xl font-bold ml-1">{mounth2}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 w-[75vw] mt-5">
          <RegularPost />
        </div>
      </div>
    </div>
  );
};

export default Home;
