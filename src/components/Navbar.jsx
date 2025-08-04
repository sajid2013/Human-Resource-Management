"use client";

import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faInbox, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AvatarDropdown from "./AvatarDropDown";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <>
      <div className="main-nav">
        {/* searchbar */}
        <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fffff" }} />
          <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
        </div>
        {/* for icons and user */}
        <div className="icon-user-side">
          <div className="icon-bg ">
            <FontAwesomeIcon icon={faInbox} style={{ color: "#767070" }} />
          </div>
          <div className="icon-bg ">
            <FontAwesomeIcon icon={faBullhorn} style={{ color: "#767070" }} />
            <div className="noti absolute -top-1 -right-3 w-4 h-4 flex justify-center items-center">1</div>
          </div>
          <div className="user-details">
            <span className="user-name">Urooj Nadeem</span>
            <span className="user-role"> Admin</span>
          </div>
          <AvatarDropdown />
        </div>
      </div>
    </>
  );
};

export default Navbar;
