/*
 * 1. login
 *    1. send otp
 *    2. verify otp
 * 2. get rules
 * 3. refresh token
 * 4. profile
 *    1. get profile
 *    2. update profile
 *    3. verify update profile
 */

import { messagesSuccess } from "../messages/success";
import type { Request } from "../types/request";
import type { UserRoles } from "../types/role";
import type { User } from "../types/user";

// login

export const loginSendOtp: Request<{ identifier: string }, void> = {
  method: "post",
  endpoint: "/auth/login",
  body: {
    identifier: "09054783996",
  },
  response: {
    message: "کد تایید ارسال شد",
    status: "success",
  },
};

export const loginVerifyOtp: Request<{ otp: string }, Pick<User, "token">> = {
  method: "post",
  endpoint: "/auth/login/verify",
  body: {
    otp: "123456",
  },
  response: {
    data: {
      token: {
        accessToken: "accessToken_example",
        refreshToken: "refresh_token_example",
      },
    },
    status: "success",
    message: "خوش آمدید!",
  },
  error: ["کد تایید اشتباه است", "کد تایید منقضی شده است , کد جدید ارسال شد"],
};

// roles

export const getRoles: Request<void, { roles: UserRoles }> = {
  method: "get",
  endpoint: "/auth/roles",
  response: {
    data: {
      roles: {
        managementRole: "manager",
        collections: [
          {
            id: "1",
            titleFa: "سون لرن",
            courses: {
              teacher: [
                { id: "c1", titleFa: "برنامه‌نویسی سی شارپ" },
                { id: "c2", titleFa: "جاوا اسکریپت مقدماتی" },
              ],
              mentor: [{ id: "c3", titleFa: "طراحی رابط کاربری" }],
            },
          },
          {
            id: "2",
            titleFa: "راکت",
            courses: {
              teacher: [{ id: "c4", titleFa: "توسعه با Node.js" }],
            },
          },
          {
            id: "3",
            titleFa: "بیت گرف",
            courses: {
              student: [{ id: "c5", titleFa: "آموزش فتوشاپ" }],
            },
          },
        ],
      },
    },
    status: "success",
  },
};

// token

export const refreshToken: Request<
  Pick<User["token"], "refreshToken">,
  Pick<User["token"], "accessToken">
> = {
  method: "post",
  endpoint: "/auth/refresh",
  body: {
    refreshToken: "refresh_token_example",
  },
  response: {
    data: {
      accessToken: "refresh_token_example",
    },
    status: "success",
  },
};

// profile

export const getProfile: Request<void, User> = {
  method: "get",
  endpoint: "/auth/me",
  response: {
    data: {
      email: "me@gmail.com",
      phone: "09044783996",
      avatar: "avatar_url_example",
      id: "123456",
      isActive: true,
      fullName: "حمید شاهسونی",
      token: {
        accessToken: "accessToken_example",
        refreshToken: "refreshToken_example",
      },
      stats: {
        // only for student role
        student: {
          conversationCount: 10,
          averageScore: 8.5,
          level: "intermediate",
        },
        // only for mentor role
        mentor: {
          sentFileCount: 5,
          reviewedCount: 20,
          averageReviewTimeInMinutes: 30,
        },
        // only for teacher role
        teacher: {
          sentFileCount: 3,
          reviewedCount: 15,
          averageReviewTimeInMinutes: 25,
        },
        // only for publisher role
        publisher: {
          studentCount: 100,
          mentorCount: 50,
          teacherCount: 30,
          courseCount: 20,
          collectionCount: 10,
        },
      },
    },
    status: "success",
  },
};

export const updateProfileById: Request<
  Pick<User, "email" | "phone" | "avatar" | "fullName">,
  User
> = {
  method: "put",
  endpoint: "/users/{userId}",
  body: {
    avatar: null,
    email: "user@example.com",
    phone: "09123456789",
    fullName: "John Doe",
  },
  response: {
    status: "success",
    message: "کد تایید ارسال شد",
  },
};

export const verifyUpdateProfileById: Request<{ otp: string }, User> = {
  method: "patch",
  endpoint: "/users/{userId}/verify",
  body: {
    otp: "123456",
  },
  response: {
    status: "success",
    message: messagesSuccess[0],
  },
};
