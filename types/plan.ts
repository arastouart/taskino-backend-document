export type plan = {
  id: string;
  title: string;
  amount: number;
  durationDays: number;
  remainingDays: number;
  diskSpaceGB: number;
  userLimits: {
    teacherCount: number;
    mentorCount: number;
    studentCount: number;
  };
  support: {
    ticket: boolean;
    phone: boolean;
  };
};
