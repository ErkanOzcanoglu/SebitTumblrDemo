import React, { useState } from "react";
import Data from "../../data.json";
import { Icon } from "@iconify/react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {Data.map((item) => {
        return (
          <div
            key={item.tumblelog.title}
            className="navbar bg-base-100 px-[10vw]">
            <div className="navbar-start md:pl-[5vw]">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <Icon icon="mdi:about-variant" width={40} height={40} />
                </label>
                <ul
                  tabIndex={0}
                  className="menu gap-2 text2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <p className="text p-4">{item.tumblelog.description}</p>
                  <a
                    target="_blank"
                    className="px-4 btn text2 underline"
                    href="https://demo.tumblr.com/archive">
                    Archive
                  </a>
                  <p className="btn text2">
                    Total Posts: {item["posts-total"]}
                  </p>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a href="/" className="btn btn-ghost normal-case text-xl">
                {item.tumblelog.title}
              </a>
            </div>
            <div className="navbar-end">
              <input
                type="text"
                className="rounded-xl md:flex hidden  ml-10 px-5 py-2"
                placeholder="Search"
              />
              <div
                className="md:hidden flex"
                onClick={() => {
                  setOpen(!open);
                }}>
                <Icon icon="ic:baseline-search" width={40} height={40} />
              </div>
            </div>
            <div
              className={`w-[80vw] flex justify-end h-10 absolute duration-500 top-20 ease-in ${
                open ? "top-20" : "top-[-200px]"
              }`}>
              <input
                type="text"
                className="rounded-xl w-[40vw] px-5 py-2"
                placeholder="Search"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
