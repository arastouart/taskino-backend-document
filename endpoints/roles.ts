/*
  1. get roles
  2. update role
  3. get active role
 */

import type { Request } from "../types/request";
import type { Role } from "../types/role";

export const getRoles: Request<void, { roles: Role[] }> = {
  method: "get",
  endpoint: "/roles",
  response: {
    data: {
      roles: [
        {
          id: "r1",
          title: "مدیریت",
          type: "management",
          role: "manager",
          isActive: false,
        },
        {
          id: "r2",
          title: "ناشر",
          type: "management",
          role: "publisher",
          isActive: false,
        },
        {
          id: "r3",
          title: "سون لرن",
          type: "collection",
          isActive: false,
          children: [
            {
              id: "r4",
              title: "مدرس",
              type: "collection",
              isActive: false,
              children: [
                {
                  id: "r5",
                  title: "سی شارپ",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
                {
                  id: "r6",
                  title: "جاوا اسکریپت",
                  type: "course",
                  role: "teacher",
                  isActive: true,
                },
                {
                  id: "r7",
                  title: "تایپ اسکریپت",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
              ],
            },
            {
              id: "r8",
              title: "منتور",
              type: "collection",
              isActive: false,

              children: [
                {
                  id: "r9",
                  title: "طراحی رابط کاربری",
                  type: "course",
                  role: "mentor",
                  isActive: false,
                },
              ],
            },
          ],
        },
        {
          id: "r10",
          title: "راکت",
          type: "collection",
          isActive: false,
          children: [
            {
              id: "r11",
              title: "مدرس",
              type: "collection",
              isActive: false,

              children: [
                {
                  id: "r12",
                  title: "تیلوینـد",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
              ],
            },
            {
              id: "r13",
              title: "دانشجو",
              type: "collection",
              isActive: false,
              children: [
                {
                  id: "r14",
                  title: "بیت‌گرف",
                  type: "course",
                  role: "student",
                  isActive: false,
                },
                {
                  id: "r15",
                  title: "فتوشاپ",
                  type: "course",
                  role: "student",
                  isActive: false,
                },
              ],
            },
          ],
        },
      ],
    },
    status: "success",
  },
};

export const setRole: Request<{ id: string }, { roles: Role[] }> = {
  method: "patch",
  endpoint: "/roles",
  body: {
    id: "123456",
  },
  response: {
    status: "success",
    data: {
      roles: [
        {
          id: "r1",
          title: "مدیریت",
          type: "management",
          role: "manager",
          isActive: false,
        },
        {
          id: "r2",
          title: "ناشر",
          type: "management",
          role: "publisher",
          isActive: false,
        },
        {
          id: "r3",
          title: "سون لرن",
          type: "collection",
          isActive: false,
          children: [
            {
              id: "r4",
              title: "مدرس",
              type: "collection",
              isActive: false,
              children: [
                {
                  id: "r5",
                  title: "سی شارپ",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
                {
                  id: "r6",
                  title: "جاوا اسکریپت",
                  type: "course",
                  role: "teacher",
                  isActive: true,
                },
                {
                  id: "r7",
                  title: "تایپ اسکریپت",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
              ],
            },
            {
              id: "r8",
              title: "منتور",
              type: "collection",
              isActive: false,

              children: [
                {
                  id: "r9",
                  title: "طراحی رابط کاربری",
                  type: "course",
                  role: "mentor",
                  isActive: false,
                },
              ],
            },
          ],
        },
        {
          id: "r10",
          title: "راکت",
          type: "collection",
          isActive: false,
          children: [
            {
              id: "r11",
              title: "مدرس",
              type: "collection",
              isActive: false,

              children: [
                {
                  id: "r12",
                  title: "تیلوینـد",
                  type: "course",
                  role: "teacher",
                  isActive: false,
                },
              ],
            },
            {
              id: "r13",
              title: "دانشجو",
              type: "collection",
              isActive: false,
              children: [
                {
                  id: "r14",
                  title: "بیت‌گرف",
                  type: "course",
                  role: "student",
                  isActive: false,
                },
                {
                  id: "r15",
                  title: "فتوشاپ",
                  type: "course",
                  role: "student",
                  isActive: false,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const getRole: Request<void, {
  role: Pick<Role, "role">
}> = {
  method: "get",
  endpoint: "/roles/active",
  response: {
    status: "success",
    data: {
      role: {
        role: "manager",
      },
    },
  },
};
