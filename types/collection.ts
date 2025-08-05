export type Collection = {
  website: string | null;
  id: string;
  titleEn: string;
  titleFa: string;
  isActive: boolean;
  stats: {
    courseCount: number;
    studentCount: number;
    mentorCount: number;
    teacherCount: number;
  };
};
