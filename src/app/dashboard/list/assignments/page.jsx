import TableSearch from "../../../../components/TableSearch";
import "./assignments.scss";
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
import { assignmentsData, access } from "../../../../lib/data";
import FormModal from "../../../../components/FormModal";
import prisma from "../../../../lib/prisma";
import { ITEM_PER_PAGE } from "../../../../lib/settings";

const columns = [
    {
        header: "Task",
        accessor: "task",
    },
    {
        header: "Department",
        accessor: "department",
        className: "hidden md:table-cell",
    },
    {
        header: "Assigned To",
        accessor: "assignedTo",
        className: "hidden md:table-cell",
    },
    {
        header: "Due Date",
        accessor: "dueDate",
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
                <h3 className="text-sm font-semibold">{item.task}</h3>
            </div>
        </td>
        <td className="hidden md:table-cell">{item.department}</td>
        <td className="hidden md:table-cell">{item.assignedTo}</td>
        <td className="hidden md:table-cell">{item.dueDate}</td>
        <td>
            <div className="flex items-center gap-2">
                {access === "admin" && (<>
                    <FormModal table="assignments" type="update" data={item} />
                    {/* // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple ">
                    //   <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
                    // </button> */}
                    <FormModal table="assignments" type="delete" id={item.id} /></>
                )}
            </div>
        </td>
    </tr>
);

const assignments = async ({ searchParams }) => {
    const { page, ...queryParams } = searchParams;
    const p = page ? parseInt(page) : 1;
    const [data, count] = await prisma.$transaction([
        prisma.assignment.findMany({

            take: ITEM_PER_PAGE,
            skip: ITEM_PER_PAGE * (p - 1)
        }),
        prisma.assignment.count()
    ]);
    console.log("Count:", count);
    // console.log(searchParams);
    return (
        <div className="main-assignments">
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
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
                        {access === "admin" && <FormModal table="assignment" type="create" />}
                    </div>
                </div>
            </div>
            {/* list */}
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            {/* pagination */}
            <div>
                <Pagination page={p} count={count} />
            </div>
        </div>
    );
};
export default assignments;
