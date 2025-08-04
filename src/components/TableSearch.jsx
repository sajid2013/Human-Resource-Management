"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TableSearch.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TableSearch = () => {
const [search, setSearch] = useState('');

  const router = useRouter();
 const handleSubmit = (e) => {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  params.set("search", search);
  router.push(`${window.location.pathname}?${params}`);
}
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffff3" }} />
      <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..."  onChange={(e) => setSearch(e.target.value)}/>
    </form>
  );
};

export default TableSearch;
