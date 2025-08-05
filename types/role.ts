import type { Collection } from "./collection";
import type { Course } from "./course";

export type UserRoles = {
  managementRole: ("manager" | "publisher");
  collections: (Pick<Collection, "id" | "titleFa"> & {
    courses: {
      student?: Pick<Course, "id" | "titleFa">[];
      mentor?: Pick<Course, "id" | "titleFa">[];
      teacher?: Pick<Course, "id" | "titleFa">[];
    };
  })[];
};
