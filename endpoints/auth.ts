import type { Example } from "../types/example";
import type { Role } from "../types/role";
import type { User } from "../types/user";

// login

export const loginSendOtp: Example<{ identifier: string }, void> = {
  method: "post",
  endpoint: "/auth/login",
  body: {
    identifier: "09054783996",
  },
  response: {
    message: "کد تایید ارسال شد",
  },
};

export const loginVerifyOtp: Example<{ otp: string }, Pick<User, "token">> = {
  method: "post",
  endpoint: "/auth/login/verify",
  body: {
    otp: "123456",
  },
  response: {
    data: {
      token: {
        access_token: "access_token_example",
        refresh_token: "refresh_token_example",
      },
    },
    message: "خوش آمدید!",
  },
  error: ["کد تایید اشتباه است", "کد تایید منقضی شده است , کد جدید ارسال شد"],
};

// role

export const getRole: Example<void, { role: Role }> = {
  method: "get",
  endpoint: "/auth/role",
  response: {
    data: {
      role: "student",
    },
  },
};

// token

export const refreshToken: Example<
  Pick<User["token"], "access_token">,
  Pick<User["token"], "refresh_token">
> = {
  method: "post",
  endpoint: "/auth/refresh",
  body: {
    access_token: "refresh_token_example",
  },
  response: {
    data: {
      refresh_token: "refresh_token_example",
    },
  },
};

// profile

export const getProfile: Example<void, User> = {
  method: "get",
  endpoint: "/auth/me",
  response: {
    data: {
      id: "123456",
      isActive: true,
      avatar: "avatar_url_example", // optional
      fullname: "حمید شاهسونی",
      email: "me@gmail.com", // optional
      phone: "09044783996", // optional
      token: {
        access_token: "access_token_example",
        refresh_token: "refresh_token_example",
      },
      role: "student",
      stats: {
        // optional
        student: {
          conversationCount: 10,
          averageScore: 85,
          level: "intermediate",
        },
        // optional
        mentor: {
          sentFileCount: 5,
          reviewedCount: 20,
          averageReviewTimeInMinutes: 30,
        },
        // optional
        teacher: {
          sentFileCount: 3,
          reviewedCount: 15,
          averageReviewTimeInMinutes: 25,
        },
        // optional
        publisher: {
          studentCount: 100,
          mentorCount: 50,
          teacherCount: 30,
          courseCount: 20,
          collectionCount: 10,
        },
      },
    },
  },
};

export const updateProfile: Example<
  Pick<User, "email" | "phone" | "fullname" | "avatar">,
  void
> = {
  method: "patch",
  endpoint: "/auth/me",
  body: {
    avatar: "avatar_url_example", // optional
    email: "me@gmail.com", // optional
    phone: "09054783996", // optional
    fullname: "حمید شاهسونی",
  },
  response: {
    message: "کد تایید ارسال شد",
  },
  error: ["کد تایید اشتباه است", "کد تایید منقضی شده است , کد جدید ارسال شد"],
};

export const updateProfileVerify: Example<{ otp: string }, void> = {
  method: "patch",
  endpoint: "/auth/me",
  body: {
    otp: "123456",
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
  },
};
