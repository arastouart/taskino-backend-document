export type Collection = {
  id: string;
  englishName: string;
  persianName: string;
  website?: string;
  isActive?: boolean;
  stats?: {
    courseCount: number;
    studentCount: number;
    mentorCount: number;
    teacherCount: number;
  };
};
