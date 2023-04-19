import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";

const QuotePost = () => {
  const data = Data[0].posts[0];
  const quoteSource = data["quote-source"];
  const quoteText = data["quote-text"];
  return (
    <div className=" md:h-[280px] h-[320px] bg-slate-800 rounded-lg p-5">
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
          <label htmlFor="quote" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex justify-between flex-col w-full md:h-[160px] h-[200px] py-5">
        <div>
          <div className="text-2xl text2 flex justify-center text-cyan-600 font-bold">
            {quoteText}
          </div>
        </div>
        <span className="flex w-full text2 justify-center text-xl font-bold text-white">
          -
          <p dangerouslySetInnerHTML={{ __html: quoteSource }} />
        </span>
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[0].id}>
            <input type="checkbox" id="quote" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-[1100px] min-h-[250px] relative">
                <label
                  htmlFor="quote"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="w-full h-[300px] sm:h-[250px] flex justify-evenly flex-col rounded-lg shadow shadow-white p-5">
                  <p className="text-3xl text-cyan-500 w-full flex text-center justify-center text2 font-bold">
                    {quoteText}
                  </p>
                  <span className="flex text-xl text2 w-full justify-center">
                    -
                    <p dangerouslySetInnerHTML={{ __html: quoteSource }} />
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

export default QuotePost;
