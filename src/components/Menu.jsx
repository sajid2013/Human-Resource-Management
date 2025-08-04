"use client"
import Link from "next/link";
import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBullhorn,
  faInbox,
  faCalendarWeek,
  faCircleUser,
  faUsersRectangle,
  faGears,
  faArrowRightFromBracket,
  faBuilding,
  faDiagramProject,
  faChalkboard,
  faListCheck,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { access } from "../lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: (
          <FontAwesomeIcon
            icon={faHouse}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Home",
        href: "/",
        visible: ["admin", "employee"],
      },
      {
        icon: <FontAwesomeIcon icon={faInbox}  className="text-[#767070] group-hover:text-white transition-colors duration-200" />,
        label: "Messages",
        href: "/dashboard/list/messages",
        visible: ["admin", "employee"],
      }, {
        icon: <FontAwesomeIcon icon={faInbox}  className="text-[#767070] group-hover:text-white transition-colors duration-200" />,
        label: "Attendance",
        href: "/dashboard/attendance",
        visible: ["admin"],
      },
      {
        icon: (
          <FontAwesomeIcon icon={faBullhorn}  className="text-[#767070] group-hover:text-white transition-colors duration-200" />
        ),
        label: "Announcements",
        href: "/dashboard/list/announcements",
        visible: ["admin", "employee"],
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faUsersRectangle}
            className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Employees",
        href: "/dashboard/list/employees",
        visible: ["admin"],
      },
      {
        icon: (
          <FontAwesomeIcon icon={faCalendarWeek}  className="text-[#767070] group-hover:text-white transition-colors duration-200"/>
        ),
        label: "Calendar",
        href: "/dashboard/list/calendar",
        visible: ["admin", "employee"],
      },
       {
        icon: (
          <FontAwesomeIcon
            icon={faBuilding}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Departments",
        href: "/dashboard/list/departments",
        visible: ["admin", "employee"],
      },
       {
        icon: (
          <FontAwesomeIcon
            icon={faDiagramProject}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Projects",
        href: "/dashboard/list/projects",
        visible: ["admin", "employee"],
      },
       {
        icon: (
          <FontAwesomeIcon
            icon={faChalkboard}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Trainings",
        href: "/dashboard/list/trainings",
        visible: ["admin", "employee"],
      },
       {
        icon: (
          <FontAwesomeIcon
            icon={faListCheck}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Assignments",
        href: "/dashboard/list/assignments",
        visible: ["admin", "employee"],
      },
       {
        icon: (
          <FontAwesomeIcon
            icon={faChartSimple}
            size="xs"
              className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Performance Reviews",
        href: "/dashboard/list/performance-reviews",
        visible: ["admin"],
      }
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: (
          <FontAwesomeIcon icon={faCircleUser} className="text-[#767070] group-hover:text-white transition-colors duration-200" />
        ),
        label: "Profile",
        href: "/profile",
        visible: ["admin", "employee"],
      },
      {
        icon: <FontAwesomeIcon icon={faGears}  className="text-[#767070] group-hover:text-white transition-colors duration-200" />,
        label: "Setting",
        href: "/setting",
        visible: ["admin"],
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="text-[#767070] group-hover:text-white transition-colors duration-200"
          />
        ),
        label: "Logout",
        action: "logout",
        visible: ["admin", "employee"],
      },
    ],
  },
];

const Menu = () => {
  const handleLogout = async () => {
  try {
    const res = await fetch("/api/users/logout", {
      method: "POST",
    });

    if (res.ok) {
      // redirect to login page or homepage
      window.location.href = "/login"; // change path if needed
    } else {
      const error = await res.json();
      alert("Logout failed: " + error.message);
    }
  } catch (err) {
    console.error("Logout error:", err);
  }
};
  return (
    <>
      <div className="menu-main">
       {menuItems.map((i) => (
  <div className="menu-head" key={i.title}>
    <span className="menu-thing">{i.title}</span>
    {i.items.map((item) => {
      if (!item.visible.includes(access)) return null;

      return item.action === "logout" ? (
        <div
          key={item.label}
          onClick={handleLogout}
          className="menu-link group no-underline text-gray-900 hover:text-white hover:bg-purple transition-colors duration-200 cursor-pointer"
        >
          <span className="menu-icons">{item.icon}</span>
          <span className="menu-label group-hover:text-white">{item.label}</span>
        </div>
      ) : (
        <Link
          href={item.href}
          key={item.label}
          className="menu-link group no-underline text-gray-900 hover:text-white hover:bg-purple transition-colors duration-200"
        >
          <span className="menu-icons">{item.icon}</span>
          <span className="menu-label group-hover:text-white">{item.label}</span>
        </Link>
      );
    })}
  </div>
))}

      </div>
    </>
  );
};

export default Menu;
