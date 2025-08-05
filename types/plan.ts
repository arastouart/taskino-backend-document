export type PlanDisk = {
  total: number;
  used: number;
  remaining: number;
  stats: {
    responder: {
      fileCount: number;
      voiceCount: number;
    };
    requester: {
      fileCount: number;
    };
  };
};

export type plan = {
  badage: string | null;
  ai: 3.5 | 4 | null;
  id: string;
  title: string;
  amount: number;
  durationDays: number;
  remainingDays: number;
  sms: number;
  diskSpace: Pick<PlanDisk, "total">;
  code: string | null;
  userLimits: {
    teacherCount: number;
    mentorCount: number;
    studentCount: number;
  };
};
