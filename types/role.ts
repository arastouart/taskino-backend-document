export type Role = {
  id: string;
  title: string;
  type: 'management' | 'collection' | 'course';
  role?: 'manager' | 'publisher' | 'teacher' | 'mentor' | 'student';
  isActive: boolean;
  children?: Role[];
}