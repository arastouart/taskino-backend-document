export type Course = {
  id: string;
  englishName: string;
  persianName: string;
  isActive?: boolean;
  responders?: {
    mentors: string[];
    teachers: string[];
  };
  stats?: {
    studentCount: number;
  };
};
