import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";
import "../App.css";
const LinkPost = () => {
  const data = Data[0].posts[2];
  const text = data["link-description"];
  const linkText = data["link-text"];
  return (
    <div className="md:h-[370px] h-[380px] rounded-lg bg-slate-800 p-5 pb-14">
      <div className="w-full h-24 flex items-center justify-between">
        <div className="dropdown">
          <label tabIndex={0} className="btn">
            <Icon icon="bi:tags" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact gap-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <p className="btn text p-4">Empty</p>
          </ul>
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <a target="_blank" className="btn" href={data["url-with-slug"]}>
            <Icon icon="material-symbols:link-rounded" />
          </a>
          <label htmlFor="link" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex justify-between flex-col h-[230px] md:pt-10 py-5">
        <div className="text2 w-full text-red-600 text-2xl justify-center flex">
          <a target="_blank" href={data["link-url"]}>
            {linkText}
          </a>
        </div>
        <span className="flex justify-center">
          <p className="text2" dangerouslySetInnerHTML={{ __html: text }} />
        </span>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[2].id}>
            <input type="checkbox" id="link" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box  relative">
                <label
                  htmlFor="link"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="w-full rounded-lg  h-[20vh] flex justify-evenly flex-col shadow shadow-white p-5">
                  <div className="w-full text2 text-red-600 text-2xl justify-start flex">
                    <a target="_blank" href={data["link-url"]}>
                      {linkText}
                    </a>
                  </div>
                  <span className="flex justify-center">
                    <p
                      className="text2"
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

export default LinkPost;
