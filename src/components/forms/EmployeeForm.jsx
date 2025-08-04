"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import "./EmployeeForm.scss";
import InputField from "../InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address!" }),
  // password: z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  departmentId: z.string().min(1, { message: "Department is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  img: z
    .any()
    .refine((files) => files?.length > 0, { message: "Image is required" }),
});
          
const EmployeeForm = ({ type, data, onClose }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: data?.username,
      email: data?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      phone: data?.phone,
      role: data?.role,
      departmentId: data?.departmentId,
    },
  });
  const watchedImg = watch("img");

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // fetch list of departments from API
    fetch('/api/departments')
      .then(res => res.json())
      .then(json => setDepartments(json.data || []));
  }, []);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      let base64Image = '';
      if (formData.img && formData.img.length > 0) {
        const file = formData.img[0];
        base64Image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = err => reject(err);
        });
      }

      const payload = {
        ...formData,
        img: base64Image,
        departmentId: formData.departmentId,
      };

const res = await fetch(`/api/employee${type === "update" ? `/${data.id}` : ''}`, {
  method: type === "update" ? "PUT" : "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
     if (res.ok){
      toast.success(`Employee ${type === "create" ? "created" : "updated"} successfully`);
    onClose();
    router.refresh();
  }else {
    toast.error("Something went wrong");
  } 
    } catch (err) {
      console.error('Error:', err);
    }
  });



  return (
    <form className="employee-form" onSubmit={onSubmit}>
      <h1 className="form-title">{type === "create" ? "Add a new Employee" : "Update the Employee"}</h1>
      <span className="form-subtitle">Fill in the details below</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />

        {/* <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        /> */}
      </div>
      <span className="text-xs text-gray-400 fonr-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
       <div className="form-group">
  <label>Department</label>
  <select {...register("departmentId")} className="form-input">
    <option value="">Select department</option>
    {departments.map(dep => (
      <option key={dep.id} value={dep.id}>
        {dep.departmentName} {/* or dep.departmentName if your model uses that */}
      </option>
    ))}
  </select>
  {errors.departmentId && (
    <p className="form-error">{errors.departmentId.message}</p>
  )}
</div>
        <InputField
          label="Role"
          name="role"
          defaultValue={data?.role}
          register={register}
          error={errors.role}
        />

      <div className="form-group justify-center">
        <label
          className="text-sm text-gray-500 flex items-center  cursor-pointer"
          htmlFor="img"
        >
          <FontAwesomeIcon
            icon={faCloudArrowUp} style={{color: "#6366f1"}}
            className="w-10 h-10 text-gray-500"
          />
          <span className="text-sm text-blue-500 font-semibold ">Upload a photo</span>
        </label>
        <input
          type="file"
          id="img"
          className="hidden"
          {...register("img")}
        ></input>
        {errors.img?.message && 
          <p className="form-error">{errors.img.message.toString()}</p>
        }
        {watchedImg && watchedImg.length >0 && (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
          src= {URL.createObjectURL(watchedImg[0])}
          alt="Preview"
          className=""preview-img />
        )}
      </div>
      </div>

      <button type="submit" className="form-submit">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EmployeeForm;
