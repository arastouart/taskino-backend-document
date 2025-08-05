/**
 * 1. create course
 * 2. get all courses
 * 3. get course by id
 * 4. update course by id
 * 5. change visibility of course by id
 * 6. delete course by id
 */

import type { Course } from "../types/course";
import type { Request } from "../types/request";

export const createCourse: Request<
  Pick<Course, "titleFa" | "titleEn" | "responders">,
  void
> = {
  method: "post",
  endpoint: "/courses",
  body: {
    titleEn: "English Name Request",
    titleFa: "نام فارسی مثال",
    responders: {
      mentors: ["654321"],
      teachers: ["123456"],
    },
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const getAllCourse: Request<
  void,
  Pick<Course, "id" | "titleFa" | "titleEn" | "isActive" | "stats">[]
> = {
  method: "get",
  endpoint: "/courses",
  query: {
    page: "1",
    limit: "10",
  },
  response: {
    data: [
      {
        id: "123456",
        titleEn: "Course One",
        titleFa: "مجموعه یک",
        isActive: true,
        stats: {
          studentCount: 100,
          mentorCount: 5,
          teacherCount: 3,
        },
      },
    ],
    pagination: {
      totalItems: 20,
      totalPages: 2,
    },
    status: "success",
  },
};

export const getCourseById: Request<
  void,
  Pick<Course, "id" | "titleFa" | "titleEn" | "responders">
> = {
  method: "get",
  endpoint: "/courses/{courseId}",
  response: {
    data: {
      id: "123456",
      titleEn: "Course One",
      titleFa: "مجموعه یک",
      responders: {
        mentors: ["654321"],
        teachers: ["123456"],
      },
    },
    status: "success",
  },
};

export const updateCourseById: Request<
  Pick<Course, "titleEn" | "titleFa" | "responders">,
  void
> = {
  method: "patch",
  endpoint: "/courses/{courseId}",
  body: {
    titleEn: "new-english-name",
    titleFa: "نام جدید",
    responders: {
      mentors: ["654321"],
      teachers: ["123456"],
    },
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const changeVisibilityCourseById: Request<
  Pick<Course, "isActive">,
  void
> = {
  method: "patch",
  endpoint: "/courses/{courseId}/visibility",
  body: {
    isActive: true,
  },
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};

export const deleteCourseById: Request<void, void> = {
  method: "delete",
  endpoint: "/courses/{courseId}",
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};
