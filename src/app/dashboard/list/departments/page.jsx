import TableSearch from "../../../../components/TableSearch";
import "./department.scss";
import Pagination from "../../../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faUserCircle,
  faEye,
  faArrowDownWideShort,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Table from "../../../../components/Table";
import Link from "next/link";
import { departmentsData, access } from "../../../../lib/data";
import FormModal from "../../../../components/FormModal";
import prisma from "../../../../lib/prisma";
import { ITEM_PER_PAGE } from "../../../../lib/settings";

const columns = [
  {
    header: "Department Name",
    accessor: "departmentName",
  },
  {
    header: "Total Employees",
    accessor: "totalEmployees",
    className: "hidden md:table-cell",
  },
  {
    header: "Floor",
    accessor: "floor",
    className: "hidden md:table-cell",
  },

  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item, index) => (
  <tr
    key={item.id || index}
    className="border-b border-gray-200 even:bg-slate-50 text-sm group hover:bg-green transition-all duration-200 cursor-pointer"
  >
    <td className="flex items-center gap-4 p-4">
      {/* <Image
          src={item.img}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
      {/* <FontAwesomeIcon
        icon={faUserCircle}
        className="text-gray-400 text-[50px] group-hover:text-white"
      /> */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold">{item.departmentName}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.totalEmployees}</td>
    <td className="hidden md:table-cell">{item.floor}</td>
    <td className="hidden md:table-cell">{item.supervisor}</td>
    <td>
      <div className="flex items-center gap-2">
        {access === "admin" && (<>
          <FormModal table="department" type="update" data={item} />
          {/* // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple ">
          //   <FontAwesomeIcon icon={faTrashCan} style={{color: "#ffffff"}}/>
          // </button> */}
          <FormModal table="departments" type="delete" id={item.id} /></>
        )}
      </div>
    </td>
  </tr>
);

const departments = async ({ searchParams }) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  // url param conditions
  const query = {};
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "departmentId":
             query.projects = {
              some: {
                departmentId: value,
              },
            };
            break;

          case "search":
            query.departmentName = {
              contains: value,
              mode: "insensitive",
            };
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.department.findMany({
      
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
       include: {
        employees: true,
      },
    }),
    prisma.department.count({ where: query }),
  ]);
  console.log("Count:", count);
  // console.log(searchParams);
  return (
    <div className="main-departments">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All departments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <FontAwesomeIcon icon={faFilter} style={{ color: "#64748b" }} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <FontAwesomeIcon
                icon={faArrowDownWideShort}
                style={{ color: "#64748b" }}
              />
            </button>
            {access === "admin" && <FormModal table="department" type="create" />}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* pagination */}
      <div>
        <Pagination page={p} count={count} />
      </div>
    </div>
  );
};
export default departments;
