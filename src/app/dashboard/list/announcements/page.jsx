import TableSearch from "../../../../components/TableSearch";
import "./announcements.scss";
import Pagination from "../../../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faArrowDownWideShort,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Table from "../../../../components/Table";
import Link from "next/link";
import { announcementsData, access } from "../../../../lib/data";
import FormModal from "../../../../components/FormModal";
import prisma from "../../../../lib/prisma";
import { ITEM_PER_PAGE } from "../../../../lib/settings";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skylight transition-all duration-200 cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="hidden md:table-cell">
  {new Date(item.date).toLocaleDateString()}
</td>

      <td>
        <div className="flex items-center gap-2">
          {access === "admin" && (
            <>
              <FormModal table="announcements" type="update" data={item} />
              <FormModal table="announcements" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
);
const Announcements = async ({searchParams}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
 const query = {};
  if (queryParams.search) {
    query.title = {
      contains: queryParams.search,
      mode: "insensitive",
    };
  }

  const [data, count] = await prisma.$transaction([
    prisma.announcement.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
       orderBy: {
    date: "desc", 
  },
    }),
    prisma.announcement.count({ where: query }),
  ]);

  return (
    <div className="main-employees">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowlight">
              <FontAwesomeIcon icon={faFilter} style={{ color: "#ffffff" }} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowlight">
              <FontAwesomeIcon
                icon={faArrowDownWideShort}
                style={{ color: "#ffffff" }}
              />
            </button>
             {access === "admin" && <FormModal table="announcements" type="create" />}
          </div>  
        </div>
      </div>
      {/* list */}
      <Table columns={columns}  renderRow={renderRow} data={data} />
      {/* pagination */}
      <div>
        <Pagination  page={p} count={count} />
      </div>
    </div>
  );
};
export default Announcements;
