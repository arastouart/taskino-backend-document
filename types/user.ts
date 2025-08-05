import type { plan, PlanDisk } from "./plan";
import type { Wallet } from "./wallet";

export type UserSubscription = {
  isActive: boolean;
  apiKey: string;
  plan: plan;
  balance: Pick<Wallet, "balance">;
  diskSpace: Pick<PlanDisk, "total">;
};

export type User = {
  email: string | null;
  phone: string | null;
  avatar: string | null;
  id: string;
  isActive: boolean;
  fullname: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
  subscription: UserSubscription;
  stats: {
    student: {
      conversationCount: number;
      averageScore: number;
      level: "beginner" | "intermediate" | "advanced";
    };
    mentor: {
      sentFileCount: number;
      reviewedCount: number;
      averageReviewTimeInMinutes: number;
    };
    teacher: {
      sentFileCount: number;
      reviewedCount: number;
      averageReviewTimeInMinutes: number;
    };
    publisher: {
      studentCount: number;
      mentorCount: number;
      teacherCount: number;
      courseCount: number;
      collectionCount: number;
    };
  };
};
