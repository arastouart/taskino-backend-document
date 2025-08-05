export type User = {
  email: string | null;
  phone: string | null;
  avatar: string | null;
  id: string;
  isActive: boolean;
  fullName: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
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
