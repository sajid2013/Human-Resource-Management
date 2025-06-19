import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faInbox, faBullhorn} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        {/* searchbar */}
        <div className="search-nav ">
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fffff" }} />
           <input className="search-input" type="text" placeholder="Search..."/>
        </div>
        {/* for icons and user */}
        <div className="icon-user-side">
          <div className="icon-bg ">
           <FontAwesomeIcon icon={faInbox} style={{ color: "#39a778" }} />
          </div>
          <div className="icon-bg ">
           <FontAwesomeIcon icon={faBullhorn} style={{ color: "#39a778" }} />
           <div className="noti absolute -top-1 -right-3 w-4 h-4 flex justify-center items-center">1</div>
          </div>
          <div className="user-details">
            <span className="user-name">Urooj Nadeem</span>
            <span className="user-role"> Admin</span>
          </div>
          <Image className="rounded-full" src="/assets/avatar2.jfif" width={36} height={36} alt=""/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
