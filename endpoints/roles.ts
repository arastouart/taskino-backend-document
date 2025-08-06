import type { Request } from "../types/request";
import type { UserRoles } from "../types/role";

export const getRoles: Request<void, { roles: UserRoles }> = {
  method: "get",
  endpoint: "/auth/roles",
  response: {
    data: {
      roles: {
        managementRole: "manager",
        collections: [
          {
            id: "123456",
            titleFa: "سون لرن",
            courses: {
              teacher: [
                { id: "123456", titleFa: "برنامه‌نویسی سی شارپ" },
                { id: "789123", titleFa: "جاوا اسکریپت مقدماتی" },
              ],
              mentor: [{ id: "654123", titleFa: "طراحی رابط کاربری" }],
            },
          },
          {
            id: "789123",
            titleFa: "راکت",
            courses: {
              teacher: [{ id: "987123", titleFa: "توسعه با Node.js" }],
            },
          },
          {
            id: "456789",
            titleFa: "بیت گرف",
            courses: {
              student: [{ id: "123456", titleFa: "آموزش فتوشاپ" }],
            },
          },
        ],
      },
    },
    status: "success",
  },
};

export const setRoles: Request<{ id: string }, { roles: UserRoles }> = {
  method: "post",
  endpoint: "/auth/roles",
  body: {
    id: "123456",
  },
  response: {
    status: "success",
    data: {
      roles: {
        managementRole: "manager",
        collections: [
          {
            id: "123456",
            titleFa: "سون لرن",
            courses: {
              teacher: [
                { id: "123456", titleFa: "برنامه‌نویسی سی شارپ" },
                { id: "789123", titleFa: "جاوا اسکریپت مقدماتی" },
              ],
              mentor: [{ id: "456789", titleFa: "طراحی رابط کاربری" }],
            },
          },
          {
            id: "789123",
            titleFa: "راکت",
            courses: {
              teacher: [{ id: "12345678", titleFa: "توسعه با Node.js" }],
            },
          },
          {
            id: "456789",
            titleFa: "بیت گرف",
            courses: {
              student: [{ id: "654321", titleFa: "آموزش فتوشاپ" }],
            },
          },
        ],
      },
    },
  },
};
