import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Cart, UserProfile, Notification, Chat } from ".";
import avatar from "../data/avatar.jpg";

import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMene,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenu />}
        color="green"
        customFunc={() => setActiveMenu((prev) => !prev)}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          icon={<FiShoppingCart />}
          color="green"
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          icon={<BsChatLeft />}
          color="green"
          customFunc={() => handleClick("chat")}
        />
        <NavButton
          title="Notification"
          dotColor="#03c9d7"
          icon={<RiNotificationLine />}
          color="notification"
          customFunc={() => handleClick("notification")}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
          onClick={() => handleClick("userProfile")}
        >
          <img src={avatar} className="rounded-full w-8 h-8" />
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        ></TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
