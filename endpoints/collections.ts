/*
 * 1. create collection
 * 2. get all collections
 * 3. get collection by id
 * 4. update collection by id
 * 5. change visibility of collection by id
 * 6. delete collection by id
 */

import type { Collection } from "../types/collection";
import type { Request } from "../types/request";

export const createCollection: Request<
  Pick<Collection, "titleFa" | "titleEn" | "website">,
  void
> = {
  method: "post",
  endpoint: "/collections",
  body: {
    titleEn: "English Name Request",
    titleFa: "نام فارسی مثال",
    website: "https://example.com", // optional
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const getAllCollection: Request<void, Collection[]> = {
  method: "get",
  endpoint: "/collections",
  query: {
    page: "1",
    limit: "10",
  },
  response: {
    data: [
      {
        id: "123456",
        titleEn: "Collection One",
        titleFa: "مجموعه یک",
        website: "https://example.com",
        isActive: true,
        stats: {
          courseCount: 10,
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

export const getCollectionById: Request<void, Collection> = {
  method: "get",
  endpoint: "/collections/{collectionId}",
  response: {
    data: {
      id: "123456",
      titleEn: "Collection One",
      titleFa: "مجموعه یک",
      website: "https://example.com",
      isActive: true,
      stats: {
        courseCount: 10,
        studentCount: 100,
        mentorCount: 5,
        teacherCount: 3,
      },
    },
    status: "success",
  },
};

export const updateCollectionById: Request<
  Pick<Collection, "titleEn" | "titleFa" | "website">,
  void
> = {
  method: "patch",
  endpoint: "/collections/{collectionId}",
  body: {
    titleEn: "new-english-name",
    titleFa: "نام جدید",
    website: "https://example.com",
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const changeVisibilityCollectionById: Request<
  Pick<Collection, "isActive">,
  void
> = {
  method: "patch",
  endpoint: "/collections/{collectionId}/visibility",
  body: {
    isActive: true,
  },
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};

export const deleteCollectionById: Request<void, void> = {
  method: "delete",
  endpoint: "/collections/{collectionId}",
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};
