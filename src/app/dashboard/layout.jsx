import Link from "next/link";
import "./layout.scss";
import Image from "next/image";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="main">
      <div className="left">
        <Link href="/" className="nav-link">
          <Image src="/assets/logo.png"  className="w-[60px] h-[20px] object-contain" alt="logo" width={48} height={48} />
          <br/>
          <span className="menu-title">HR Management</span>
        </Link>
        <Menu/>
      </div>

      <div className="right">
        <Navbar/>
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
