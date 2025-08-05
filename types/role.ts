import type { Collection } from "./collection";
import type { Course } from "./course";

export type UserRoleManagment = "manager" | "publisher";
export type UserRoleConversation = "mentor" | "teacher" | "student";

export type UserRoles = {
  managementRole: UserRoleManagment;
  collections: (Pick<Collection, "id" | "titleFa"> & {
    courses: Partial<
      Record<UserRoleConversation, Pick<Course, "id" | "titleFa">[]>
    >;
  })[];
};
