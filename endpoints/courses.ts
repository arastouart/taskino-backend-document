/**
 * 1. create course 
 * 2. get all courses by collection id
 * 3. get course by course id
 * 4. update course by course id
 * 5. change status of course by course id
 * 6. delete course by course id
 */

import { messagesSuccess } from "../messages/success";
import type { Course } from "../types/course";
import type { Request } from "../types/request";

export const createCourseByCollectionId: Request<
  Pick<Course, "titleFa" | "titleEn" | "responders">,
  void
> = {
  method: "post",
  endpoint: "/courses/{collectionId}",
  body: {
    titleEn: "English Name Request",
    titleFa: "نام فارسی مثال",
    responders: {
      mentors: ["654321"],
      teachers: ["123456"],
    },
  },
  response: {
    message: messagesSuccess[0],
    status: "success",
  },
};

export const getAllCoursesByCollectionId: Request<
  void,
  Pick<Course, "id" | "titleFa" | "titleEn" | "isActive" | "stats">[]
> = {
  method: "get",
  endpoint: "/courses/{collectionId}",
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

export const getCourseByCourseId: Request<
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

export const updateCourseByCourseId: Request<
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
    message: messagesSuccess[1],
    status: "success",
  },
};

export const changeStatusCourseByCourseId: Request<
  Pick<Course, "isActive">,
  void
> = {
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

export const deleteCourseByCourseId: Request<void, void> = {
  method: "delete",
  endpoint: "/courses/{courseId}",
  response: {
    status: "success",
    message: messagesSuccess[2],
  },
};
