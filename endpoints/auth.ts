import type { Example } from "../types/example";
import type { User, UserRole } from "../types/user";

// login

export const loginSendOtp: Example<{ identifier: string }, void> = {
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

export const loginVerifyOtp: Example<{ otp: string }, Pick<User, "token">> = {
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

// role

export const getRole: Example<void, { role: UserRole }> = {
  method: "get",
  endpoint: "/auth/role",
  response: {
    data: {
      role: "student",
    },
    status: "success",
  },
};

// token

export const refreshToken: Example<
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

export const getProfile: Example<void, User> = {
  method: "get",
  endpoint: "/auth/me",
  response: {
    data: {
      email: "me@gmail.com",
      phone: "09044783996",
      avatar: "avatar_url_example",
      id: "123456",
      isActive: true,
      fullname: "حمید شاهسونی",
      token: {
        accessToken: "accessToken_example",
        refreshToken: "refreshToken_example",
      },
      role: "publisher",
      // only for publisher role
      subscription: {
        isActive: true,
        apiKey: "api_key_example",
        plan: {
          id: "plan_id_example",
          title: "Plan Title",
          amount: 100,
          durationDays: 30,
          remainingDays: 15,
          diskSpace: {
            total: 1024,
          },
          code: "plan_code_example",
          userLimits: {
            teacherCount: 5,
            mentorCount: 10,
            studentCount: 100,
          },
          badage: "badge_example",
          ai: 3.5,
        },
        balance: {
          balance: 500,
        },
        diskSpace: {
          total: 1024,
        },
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

export const updateProfile: Example<
  Pick<User, "email" | "phone" | "fullname" | "avatar">,
  void
> = {
  method: "patch",
  endpoint: "/auth/me/profile",
  body: {
    avatar: "avatar_url_example",
    email: "me@gmail.com",
    phone: "09054783996",
    fullname: "حمید شاهسونی",
  },
  response: {
    message: "کد تایید ارسال شد",
    status: "success",
  },
};

export const updateProfileVerify: Example<{ otp: string }, void> = {
  method: "post",
  endpoint: "/auth/me/profile/verify",
  body: {
    otp: "123456",
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
  error: ["کد تایید اشتباه است", "کد تایید منقضی شده است , کد جدید ارسال شد"],
};
