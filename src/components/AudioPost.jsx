import React from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";

const AudioPost = () => {
  const audioPlayer = Data[0].posts[4]["audio-player"];
  const parser = new DOMParser();
  const doc2 = parser.parseFromString(audioPlayer, "text/html");
  const iframe = doc2.querySelector("iframe");
  const src = iframe.getAttribute("src");

  const data = Data[0].posts[4];
  const audio = data["audio-embed"];
  const audioCaption = data["audio-caption"];
  return (
    <div className=" rounded-lg h-[350px] bg-slate-800 p-5">
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
          <label htmlFor="audio" className="btn">
            <Icon icon="carbon:popup" />
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-between py-5 mt-5 h-[200px]">
        <div className="w-full flex justify-center">
          <iframe
            className="md:w-[20vw] w-full rounded-xl"
            src={src}
            frameBorder={0}
            height={85}></iframe>
        </div>
        <div
          className="w-full text2 text-white text-center text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: audioCaption }}
        />
      </div>
      {Data.map((item) => {
        return (
          <div key={item.posts[3].id}>
            <input type="checkbox" id="audio" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-[800px] h-[300px] relative">
                <label
                  htmlFor="audio"
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </label>
                <div className="w-full h-full flex justify-evenly flex-col rounded-lg shadow shadow-white p-5">
                  <div className="w-full flex justify-center">
                    <iframe
                      className="md:w-[30vw] w-full rounded-xl"
                      src={src}
                      frameBorder={0}
                      height={85}></iframe>
                  </div>
                  <div
                    className="w-full text-white text-center text2 text-xl font-bold"
                    dangerouslySetInnerHTML={{ __html: audioCaption }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AudioPost;
