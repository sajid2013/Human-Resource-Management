"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faPen,
  faPlus,
  faTrash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState } from "react";
import EmployeeForm from "./forms/EmployeeForm";
import AnnouncementForm from "./forms/AnnouncementForm";
import DepartmentForm from "./forms/DepartmentForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProjectForm from "./forms/ProjectForm";


const forms = {

employee: (type, data, onClose) => <EmployeeForm type={type} data={data}  onClose={onClose}/>,
announcements: (type, data, onClose) => <AnnouncementForm type={type} data={data}  onClose={onClose}/>,
department: (type, data, onClose) => <DepartmentForm type={type} data={data} onClose={onClose}/>,
project: (type,data, onClose) => <ProjectForm type={type} data={data} onClose={onClose}/>
}

const FormModal = ({ table, type, data, id }) => {
  const router = useRouter()
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow"
      : type === "update"
        ? "bg-purple"
        : "bg-purple";
  const iconMap = { create: faPlus, delete: faTrash, update: faPen };
  const [open, setOpen] = useState(false);


  const handleDelete = async (e) => {
  e.preventDefault();

  const res = await fetch(`/api/${table}/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    toast.success(`${table} deleted successfully`);
    setOpen(false); // close modal
    router.refresh(); // refresh page
  } else {
    toast.error("Failed to delete");
  }
};

const Form = ({type, table, data, id, onClose}) => {
  if (type === "delete" && id) {
    return (
      <form onSubmit={handleDelete} className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want to delete this {table}?
        </span>
        <button type="submit" className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    );
  }

  if ((type === "create" || type === "update") && forms[table]) {
    return forms[table](type, data,onClose);
  }

  return <span>Form not found</span>;
};



  
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={iconMap[type]} className="w-4 h-4 text-white" />
      </button>
      {open && (
        <div className="w-full mx-auto h-full absolute left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] ">
            <Form type={type} table={table} data={data} id={id} onClose={() => setOpen(false)} />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
