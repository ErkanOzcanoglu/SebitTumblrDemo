import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";
import "../App.css";
const ImagePost = () => {
  const data = Data[0].posts[1];
  const text = data["photo-caption"];
  return (
    <div className="w-[650px] bg-slate-800 rounded-lg p-5 pb-14">
      <div className="w-full h-24 flex items-center justify-between">
        <div className="dropdown">
          <label tabIndex={0} className="btn">
            <Icon icon="bi:tags" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact gap-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <p className="btn text p-4">#{data.tags[0]}</p>
            <p className="btn text p-4">#{data.tags[1]}</p>
            <p className="btn text p-4">#{data.tags[2]}</p>
          </ul>
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <a target="_blank" className="btn" href={data["url-with-slug"]}>
            <Icon icon="material-symbols:link-rounded" />
          </a>
          <label htmlFor="image" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex justify-evenly flex-col w-full h-full">
        <div className="w-full justify-center flex">
          <a target="_blank" href={data["photo-url-1280"]}>
            <img
              className="object-contain"
              src={data["photo-url-1280"]}
              alt={data.tags[0]}
            />
          </a>
        </div>
        <span className="flex mb-10 w-full justify-center text-xl font-bold text-white">
          -
          <p className="text2" dangerouslySetInnerHTML={{ __html: text }} />
        </span>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[1].id}>
            <input type="checkbox" id="image" className="modal-toggle" />
            <div className="modal w-full">
              <div className="modal-box max-w-[1000px] h-full w-full relative">
                <label
                  htmlFor="image"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="w-full h-full flex justify-evenly flex-col rounded-lg shadow shadow-white p-5">
                  <div className="w-full justify-center flex">
                    <img
                      className="object-contain"
                      src={data["photo-url-1280"]}
                      alt={data.url}
                    />
                  </div>
                  <span className="flex text2 justify-center">
                    -
                    <p
                      className=""
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImagePost;
