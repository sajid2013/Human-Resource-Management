// import { UserGender, PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   //admin
//   await prisma.admin.deleteMany();
//   await prisma.admin.create({
//     data: {
//       username: "admin1",
//     },
//   });

//   //employees
//   const employeeIds = [];
//   for (let i = 1; i <= 15; i++) {
//     const employee = await prisma.employees.create({
//       data: {
//         username: `employee${i}`,
//         firstName: `Employee ${i}`,
//         lastName: `Employee ${i}`,
//         email: `employee${i}@example.com`,
//         phone: `123456789${i}`,
//         role: "EMPLOYEE",
//         department: `Department ${i}`,
//         gender: i % 2 === 0 ? UserGender.MALE : UserGender.FEMALE,
//       },
//     });
//     employeeIds.push(employee.id);
//   }
//   //attendance

//   for (let i = 1; i <= 10; i++) {
//     await prisma.attendance.create({
//       data: {
//         date: new Date(),
//         present: true,
//         employeeId: `employeeIds${i}`,
//       },
//     });
//   }

//   //announcements
//   for (let i = 1; i <= 5; i++) {
//     await prisma.announcements.create({
//       data: {
//         title: `Announcement ${i}`,
//         description: `Description for announcement ${i}`,
//         date: new Date(),
//       },
//     });
//   }
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   const dummyEmployees = [
//     {
//       username: "jdoe",
//       firstName: "John",
//       lastName: "Doe",
//       email: "john@example.com",
//       phone: "1234567890",
//       role: "Developer",
//       department: "Engineering",
//       img: "/images/employees/john.jpg",
//       gender: "MALE",
//     },
//     {
//       username: "asmith",
//       firstName: "Alice",
//       lastName: "Smith",
//       email: "alice@example.com",
//       phone: "0987654321",
//       role: "Designer",
//       department: "Product",
//       img: "/images/employees/alice.jpg",
//       gender: "FEMALE",
//     },
//   ];

//   for (const employee of dummyEmployees) {
//     await prisma.employees.upsert({
//       where: { username: employee.username },
//       update: {},
//       create: employee,
//     });
//   }

//   console.log("✅ Dummy employees seeded successfully!");
// }

// main()
//   .catch((e) => {
//     console.error("❌ Seeding error:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// prisma/seed.js

import { PrismaClient, Day } from "@prisma/client";
import { employeesData, announcementsData } from "../src/lib/data.js"; // Adjust path if needed

const prisma = new PrismaClient();

async function main() {

  await prisma.admin.deleteMany(); // Remove old admin(s) if any
  await prisma.admin.create({
    data: {
      username: "admin1",
      email: "admin@hdcomputing.com",
      access: "admin",
    },
  });
  console.log("✅ Seeded admin");

  for (const emp of employeesData) {
    await prisma.employee.upsert({
      where: { username: emp.username },
      update: {},
      create: {
        username: emp.username,
        firstName: emp.firstName,
        lastName: emp.lastName,
        email: emp.email,
        phone: emp.phone,
        role: emp.role,
        department: emp.departmentName,
        img: emp.img,
        remainingLeaves: 10,
        totalLeaves: 20,
        access: "employee",
      },
    });
  }
  console.log("✅ Seeded employees successfully");

  // Seed departments
  const departmentsData = [
    {
      departmentName: "Human Resources",
      floor: "1st Floor",
      totalEmployees: 12,
      supervisor: "Ayesha Khan",
    },
    {
      departmentName: "Finance",
      floor: "2nd Floor",
      totalEmployees: 8,
      supervisor: "Bilal Ahmed",
    },
    {
      departmentName: "IT Support",
      floor: "Basement",
      totalEmployees: 15,
      supervisor: "Zain Ali",
    },
    {
      departmentName: "Marketing",
      floor: "3rd Floor",
      totalEmployees: 9,
      supervisor: "Maham Raza",
    },
    {
      departmentName: "Sales",
      floor: "4th Floor",
      totalEmployees: 11,
      supervisor: "Farhan Siddiqui",
    },
  ];

  for (const dept of departmentsData) {
    await prisma.department.upsert({
      where: { departmentName: dept.departmentName },
      update: {},
      create: dept,
    });
  }

  console.log("✅ Seeded departments");

  const departments = await prisma.department.findMany();
  const employees = await prisma.employee.findMany();
  const projects = await prisma.project.findMany();

  // Seed projects

  for (let i = 1; i <= 30; i++) {
    await prisma.project.create({
      data: {
        projectName: `Project ${i}`,

        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        endDate: new Date(new Date().setHours(new Date().getHours() + 3)),

      },
    });
  }
  console.log("✅ Seeded projects");

  // Seed attendance
  const statuses = ["Present", "Absent", "Sick Leave", "Casual Leave"];
  const attendance = await prisma.attendance.findMany();
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        status: statuses[i % statuses.length],
        employeeId: employees[i % employees.length].id,

      },
    });
  }
  console.log("✅ Seeded attendance");

  // Seed assignments

  for (let i = 0; i < 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i + 1}`,
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        project: {
          connect: { id: projects[i % projects.length].id },
        },
        employee: {
          connect: { id: employees[i % employees.length].id },
        }
      }
    });
  }
  console.log("✅ Seeded assignments");

  // Seed announcements
  for (const ann of announcementsData) {
    await prisma.announcement.create({
      data: {
        title: ann.title,
        date: new Date(ann.date),
      },
    });
  }
  console.log("✅ Seeded announcements");

}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
