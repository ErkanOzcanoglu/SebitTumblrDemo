import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";

const ExampleRegularPost = () => {
  const data = Data[0].posts[6];
  const body = data["regular-body"];
  return (
    <>
      <div className="rounded-lg bg-slate-800 p-5">
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
            <label htmlFor="regular" className="btn">
              <Icon icon="carbon:popup" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-5">
          <div className="md:w-[30vw] text-white p-4 text-xs font-bold">
            <p
              className="underL text2 tracking-wide"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        </div>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[6].id}>
            <input type="checkbox" id="regular" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-[800px] relative">
                <label
                  htmlFor="regular"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="flex w-full min-h-[300px] justify-center items-center mt-5 rounded-lg shadow shadow-white">
                  <div className=" text-white p-4 text-xs font-bold">
                    <p
                      className="underL text2 tracking-wider text-xl"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExampleRegularPost;
