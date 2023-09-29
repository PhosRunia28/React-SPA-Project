import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import classNames from "classnames";
// import SideBar from "../component/SideBar";
export default function Root() {
  const [openNav, setOpenNav] = useState(false);
  const classes = classNames(
    "fixed z-10 bg-black top-48 w-12 h-12 text-white text-center text-xl py-2 cursor-pointer ",
    {
      "left-40": openNav == true,
    }
  );

  return (
    <div className="flex gap-14 relative transition duration-300">
      <div onClick={() => setOpenNav(!openNav)} className={classes}>
        O
      </div>
      {openNav && (
        <div className="bg-blue-300 max-h-screen h-screen w-full max-w-[10rem] py-6 flex flex-col gap-4 border transition duration-300">
          <NavLink to="/about" className="text-white text-xl text-center">
            About
          </NavLink>
          <NavLink to="/about" className="text-white text-xl text-center">
            About
          </NavLink>
          <NavLink to="/about" className="text-white text-xl text-center">
            About
          </NavLink>
        </div>
      )}
      <Outlet />
    </div>
  );
}
