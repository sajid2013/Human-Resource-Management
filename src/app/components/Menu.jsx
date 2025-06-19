import Link from "next/link";
import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBullhorn,
  faInbox,
  faCalendarWeek,
  faUser,
  faGears,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: (
          <FontAwesomeIcon
            icon={faHouse}
            size="xs"
            style={{ color: "#39a778" }}
          />
        ),
        label: "Home",
        href: "/",
      },
      {
        icon: <FontAwesomeIcon icon={faInbox} style={{ color: "#39a778" }} />,
        label: "Messages",
        href: "/messages",
      },
      {
        icon: (
          <FontAwesomeIcon icon={faBullhorn} style={{ color: "#39a778" }} />
        ),
        label: "Announcements",
        href: "/announcements",
      },
      {
        icon: (
          <FontAwesomeIcon icon={faCalendarWeek} style={{ color: "#39a778" }} />
        ),
        label: "Calendar",
        href: "/calendar",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <FontAwesomeIcon icon={faUser} style={{ color: "#39a778" }} />,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <FontAwesomeIcon icon={faGears} style={{ color: "#39a778" }} />,
        label: "Setting",
        href: "/setting",
      },
      {
        icon: (
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            style={{ color: "#39a778" }}
          />
        ),
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <div className="menu-main">
        {menuItems.map((i) => (
          <div className="menu-head" key={i.title}>
            <span className="menu-thing">{i.title}</span>
            {i.items.map((item) => (
              <Link
                className="menu-link"
                href={item.href}
                key={item.label}
              >
                <span className="menu-icons">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
