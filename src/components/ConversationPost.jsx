import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";
import "../App.css";
const ConversationPost = () => {
  const data = Data[0].posts[3];
  const text = data["conversation-text"];
  const lines = text.split("\n");
  return (
    <div className="h-[370px] bg-slate-800 rounded-lg p-5 pb-14">
      <div className="w-full h-24 flex items-center justify-between">
        <div className="dropdown">
          <label tabIndex={0} className="btn">
            <Icon icon="bi:tags" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact gap-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <p className="btn text p-4">#{data.tags[0]}</p>
          </ul>
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <a target="_blank" className="btn" href={data["url-with-slug"]}>
            <Icon icon="material-symbols:link-rounded" />
          </a>
          <label htmlFor="conv" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex flex-col mt-2 p-2">
        <div className="bg-yellow justify-center flex flex-col gap-2">
          <div className="flex w-fit bg-gray-700 text-xs rounded-xl px-2 py-1 flex-col text2">
            {lines[0]}
          </div>
          <div className="w-full flex justify-end">
            <div className="flex w-fit bg-slate-500 text-xs text2 text-end px-2 py-1 rounded-xl flex-col">
              {lines[1]}
            </div>
          </div>
          <div className="flex w-fit bg-gray-700 text-xs rounded-xl px-2 py-1 flex-col text2">
            {lines[2]}
          </div>
          <div className="w-full flex justify-end">
            <div className="flex w-fit bg-slate-500 text-xs text2 px-2 text-end py-1 rounded-xl flex-col">
              {lines[3]}
            </div>
          </div>
          <div className="flex w-fit bg-gray-700 text-xs rounded-xl px-2 py-1 flex-col text2">
            {lines[4]}
          </div>
          <div className="w-full flex justify-end">
            <div className="flex w-fit bg-slate-500 text-xs text2 px-2 text-end py-1 rounded-xl flex-col">
              {lines[5]}
            </div>
          </div>
        </div>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[3].id}>
            <input type="checkbox" id="conv" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-[1000px] h-[400px] relative">
                <label
                  htmlFor="conv"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="flex justify-evenly flex-col w-full h-full px-5 py-10 rounded-lg shadow shadow-white">
                  <div className="w-full justify-center flex flex-col gap-4">
                    <div className="text-lg text-white flex w-fit bg-gray-700 rounded-xl text2 px-2 py-1 flex-col">
                      {lines[0]}
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="text-lg text-white flex w-fit bg-slate-500 text-end text2 px-2 py-1 rounded-xl flex-col">
                        {lines[1]}
                      </div>
                    </div>
                    <div className="text-lg text-white flex w-fit bg-gray-700 rounded-xl text2 px-2 py-1 flex-col">
                      {lines[2]}
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="text-lg text-white flex w-fit bg-slate-500 px-2 text2 text-end py-1 rounded-xl flex-col">
                        {lines[3]}
                      </div>
                    </div>
                    <div className="text-lg text-white flex w-fit bg-gray-700 rounded-xl text2 px-2 py-1 flex-col">
                      {lines[4]}
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="text-lg text-white flex w-fit bg-slate-500 px-2 text-end text2 py-1 rounded-xl flex-col">
                        {lines[5]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConversationPost;
