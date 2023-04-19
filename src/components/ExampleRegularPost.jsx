import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";

const ExampleRegularPost = () => {
  const data = Data[0].posts[5];
  const title = data["regular-title"];
  const body = data["regular-body"];
  return (
    <div className="h-[350px] rounded-lg bg-slate-800 p-5">
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
        <div
          className="w-12 h-12 justify-center items-center flex"
          href={data["url-with-slug"]}>
          <Icon
            color="white"
            className="animate-bounce"
            width={30}
            icon="iconoir:mouse-scroll-wheel"
          />
        </div>
        <div className="w-fit gap-y-2 flex flex-col">
          <a target="_blank" className="btn" href={data["url-with-slug"]}>
            <Icon icon="material-symbols:link-rounded" />
          </a>
          <label htmlFor="exRegular" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex items-center flex-col overflow-scroll scroll h-[200px] mt-5">
        <div className="w-full flex justify-center">
          <div className="text-xl text-cyan-400 text2 font-bold">{title}</div>
        </div>
        <div className="md:w-[30vw] text-white text2 p-4 text-xs font-bold">
          <p className="underL" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[3].id}>
            <input type="checkbox" id="exRegular" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-[600px] relative">
                <label
                  htmlFor="exRegular"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="flex flex-col mt-5 rounded-lg shadow shadow-white">
                  <div className="w-full flex justify-center">
                    <div className="text-xl text2 text-cyan-400 font-bold">
                      {title}
                    </div>
                  </div>
                  <div className="text-white text2 p-4 text-sm tracking-wide font-bold">
                    <p
                      className="underL tracking-wider "
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
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

export default ExampleRegularPost;
