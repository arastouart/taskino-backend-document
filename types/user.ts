import type { Role } from "./role";

export type User = {
  id: string;
  isActive: boolean;
  avatar: string;
  fullname?: string;
  email?: string;
  phone?: string;
  token: {
    access_token: string;
    refresh_token: string;
  };
  role: Role;
  stats: {
    student?: {
      conversationCount: number;
      averageScore: number;
      level: "beginner" | "intermediate" | "advanced";
    };
    mentor?: {
      sentFileCount: number;
      reviewedCount: number;
      averageReviewTimeInMinutes: number;
    };
    teacher?: {
      sentFileCount: number;
      reviewedCount: number;
      averageReviewTimeInMinutes: number;
    };
    publisher?: {
      studentCount: number;
      mentorCount: number;
      teacherCount: number;
      courseCount: number;
      collectionCount: number;
    };
  };
};
