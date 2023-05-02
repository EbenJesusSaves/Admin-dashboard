import React from "react";
import { Link } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const SideBar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 text-xl flex font-extrabold tracking-tight dark:text-white text-slate-900 "
            >
              <SiShopware /> <span>Something small </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => {}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
