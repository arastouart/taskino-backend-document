/**
 * 1. get all users
 * 2. toggle status of user by id
 * 3. reset fullname of user by id
 */

import { messagesSuccess } from "../messages/success";
import type { Request } from "../types/request";
import type { User } from "../types/user";

export const getAllUsers: Request<
  void,
  Pick<User, "id" | "phone" | "email" | "isActive" | "fullName">[]
> = {
  method: "get",
  endpoint: "/courses",
  query: {
    page: "1",
    limit: "10",
    search: "", // filter by [phone, email, fullName, titleFa(collection)(only for rule manager)]
  },
  response: {
    data: [
      {
        id: "123456",
        phone: "09123456789",
        email: "user@example.com",
        isActive: true,
        fullName: "John Doe",
      },
    ],
    pagination: {
      totalItems: 20,
      totalPages: 2,
    },
    status: "success",
  },
};

export const changeStatusCourseById: Request<Pick<User, "isActive">, void> = {
  method: "patch",
  endpoint: "/courses/{courseId}/status",
  body: {
    isActive: true,
  },
  response: {
    status: "success",
    message: messagesSuccess[3],
  },
};

export const resetFullnameById: Request<void, Pick<User, "id" | "fullName">> = {
  method: "patch",
  endpoint: "/users/{userId}/reset-fullname",
  response: {
    status: "success",
    message: "عملیات با نام و نام خانوادگی ریست شد",
  },
};
