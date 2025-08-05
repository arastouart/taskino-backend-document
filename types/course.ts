export type Course = {
  id: string;
  titleFa: string;
  titleEn: string;
  isActive: boolean;
  responders: {
    mentors: string[];
    teachers: string[];
  };
  stats: {
    studentCount: 100;
    mentorCount: 5;
    teacherCount: 3;
  };
};
